declare module 'vuelidate/lib/validators' {
  const required: Function
  const requiredIf: Function
  const requiredUnless: Function
  const minLength: Function
  const maxLength: Function
  const minValue: Function
  const maxValue: Function
  const between: Function
  const alpha: Function
  const numeric: Function
  const alphaNum: Function
  const integer: Function
  const decimal: Function
  const email: Function
  const ipAddress: Function
  const macAddress: Function
  const sameAs: Function
  const url: Function
  const or: Function
  const and: Function
  const not: Function
  const helpers: any
  export {
    required, requiredIf, requiredUnless,
    minLength, maxLength, minValue, maxValue, between, 
    alpha, numeric, alphaNum, integer, decimal, 
    email, ipAddress, macAddress, url,
    sameAs, or, and, not, 
    helpers
  }
}

declare module 'id-validator' {
  const idValidator: any
  export default idValidator
}