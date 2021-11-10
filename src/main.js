import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ApexCharts from 'apexcharts'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "sweetalert2/dist/sweetalert2.min.css"

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  Swal,
  render: function (h) { return h(App) }
}).$mount('#app')
