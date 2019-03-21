import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue' //importamos bootstrap

Vue.use(BootstrapVue); //le decimos a vue que use bootstrap
Vue.config.productionTip = false

//importamos los estilos Css de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
