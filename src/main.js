import '@/assets/js/mobileRemSetting' ;//移动端使用rem
import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueCookies)

store.commit('updateToken');

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
