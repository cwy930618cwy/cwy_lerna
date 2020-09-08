import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  _provisionalErrors: Record<string, string> = {}

  addProvisionalError (key: string, error: string ) {
    this.$set(this.$data._provisionalErrors, key, error)
    let unwatch = this.$watch(key, () => {
      this.$delete(this.$data._provisionalErrors, key)
      unwatch()
    })
  }

  get errors () {
    const v = this.$v || {}
    const validations = (this as any).$options.validations || {}
    const hasMessage = (prop: string, validatorName: string) => Boolean(validations[prop][validatorName].message)
    const hasError = (prop: string, validatorName: string) => !v[prop][validatorName]
    const usecaseErrors = Object.keys(validations).reduce((acc: any, prop: string) => {
      if (!v[prop] || !v[prop].$error) return acc
      const keys = Object.keys(validations[prop]).filter((k: any) => hasMessage(prop, k) && hasError(prop, k))
      acc[prop] = keys.length > 0 ? validations[prop][keys[0]].message : ''
      return acc
    }, {})
    return Object.assign(usecaseErrors, this.$data._provisionalErrors)
  }
}