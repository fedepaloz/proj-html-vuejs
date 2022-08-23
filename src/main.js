import Vue from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import{faInstagram} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
import{faTwitter}from '@fortawesome/free-brands-svg-icons'
import{faYoutube} from '@fortawesome/free-brands-svg-icons'
library.add(faBars,faInstagram,faFacebook,faTwitter,faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
 