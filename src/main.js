// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
// import firebase from './service/firebase'
import VueResource from 'vue-resource'

import { database } from './service/firebase'

Vue.use(Vuefire)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: database.ref('cat').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
