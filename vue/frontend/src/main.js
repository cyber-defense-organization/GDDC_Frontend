import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faBars)
var VueCookie = require('vue-cookie')
// Tell Vue to use the plugin
Vue.use(VueCookie)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// Vue.http.headers.common['access-control-allow-origin'] = '*'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
