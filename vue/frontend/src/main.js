import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// db url, collection name and db name

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback){
// console.log("Connection Succeeded");
// })

library.add(faCoffee, faBars)
var VueCookie = require('vue-cookie')
// Tell Vue to use the plugin
Vue.use(VueCookie)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
