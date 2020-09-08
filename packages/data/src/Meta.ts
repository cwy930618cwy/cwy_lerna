import { VuexModule, Mutation } from 'vuex-module-decorators'
import { attachStaticAccessor, Module } from './utils';
import { Country } from 'models'

@Module
class Meta extends VuexModule {
  countries: Country[] = []
  @Mutation saveCountryCodes(countries: Country[]) { this.countries = countries }
}

export default attachStaticAccessor(Meta)
