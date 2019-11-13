// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Highcharts from 'highcharts-vue'

Vue.use(Highcharts, {tagName: 'charts'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
