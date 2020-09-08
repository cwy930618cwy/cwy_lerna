import { VuexModule } from 'vuex-module-decorators';
import { Country } from 'models';
declare class Meta extends VuexModule {
    countries: Country[];
    saveCountryCodes(countries: Country[]): void;
}
declare const _default: typeof Meta & Meta;
export default _default;
