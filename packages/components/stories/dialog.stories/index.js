import { storiesOf } from '@storybook/vue';
import backgrounds from '@storybook/addon-backgrounds'

import VueJSModal from 'vue-js-modal';
import Vue from 'vue';

import { Dialog, DialogPlugin } from '../../dist/components'

import DialogContent from './DialogContent.vue'

Vue.use(VueJSModal, { dynamic: true, injectModalsContainer: true })
Vue.use(DialogPlugin)


storiesOf('Dialog', module)
  .addDecorator(backgrounds([{
    name: 'gray', value: '#747474', default: true
  }]))
  .add('basic', () => ({
    components: { Dialog },
    template: `
    <Dialog title="This is a basic dialog" :buttons="['OK']">
      Hello
    </Dialog>
    `
  }))
  .add('advanced content', () => ({
    components: { Dialog },
    template: `
    <Dialog title="This is a dialog with advanced content" :buttons="['OK']">
      <div style="padding: 10px; color: #666; text-align: center">
        <p>Hello, world</p>
        <input>
      </div>
    </Dialog>
    `
  }))
  .add('multiple buttons', () => ({
    components: { Dialog },
    template: `
    <Dialog title="This is a dialog with multiple buttons" :buttons="[{ isSecondary: true, text: 'Cancel' }, 'OK']">
      <div style="padding: 10px; color: #666; text-align: center">
        Hello, world
      </div>
    </Dialog>
    `
  }))


storiesOf('Dialog', module)
  .add('as prototype method', () => ({
    data () {
      return {
        logs: []
      }
    },
    template: `
    <div>
      <button @click="show">Show dialog</button>
      <div style="position: absolute; top: 0; left: 0">
        <p v-for="log in logs">{{ log }}</p>
      </div>
    </div>
    `,
    methods: {
      show () {
        this.$showDialog({
          title: 'This dialog is shown using mixin',
          buttons: ['OK', { isSecondary: true, text: 'Cancel' }],
          body: DialogContent,
          onButtonClick: (index) => {
            this.logs.push('clicked button ' + index)
          }
        })
      }
    }
  }))
  .add('update dialog props after showing it', () => ({
    template: `
    <div>
      <button @click="show">Show dialog</button>
    </div>
    `,
    methods: {
      show () {
        const update = this.$showDialog({
          title: 'This dialog will be dynamically updated',
          buttons: ['OK (3)', { isSecondary: true, text: 'Cancel' }],
          body: DialogContent
        })
        let counter = 3
        const doUpdate = () => {
          if (counter === 0) return
          update({
            title: 'Updated title',
            buttons: ['OK (' + (--counter) + ')', { isSecondary: true, text: 'Cancel' }]
          })
          setTimeout(doUpdate, 1000)
        }
        setTimeout(doUpdate, 1000)
      }
    }
  }))
