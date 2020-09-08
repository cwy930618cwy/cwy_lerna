const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ResizeMixin extends Vue {
  a = 1;
}
