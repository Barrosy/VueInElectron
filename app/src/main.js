import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(Vue.version)

new Vue({
  render: h => h(App),
}).$mount('#app')
