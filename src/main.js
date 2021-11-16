import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.min.css"
import VueGoogleCharts from 'vue-google-charts'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueGoogleCharts)
Vue.component('apexchart',VueApexCharts)

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  Swal,
  render: function (h) { return h(App) }
}).$mount('#app')
