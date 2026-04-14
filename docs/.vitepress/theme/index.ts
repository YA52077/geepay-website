import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles.css'
import WelcomeModal from './WelcomeModal.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-top': () => h(WelcomeModal)
    })
  }
}
