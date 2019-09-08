import Vue from 'vue'
import Vuelidate from 'vuelidate'
import gallery from 'img-vuer'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.use(gallery, {
  isIndexShow: false,
  useCloseButton: true,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
