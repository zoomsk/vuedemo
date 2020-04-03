import '@/assets/js/mobileRemSetting' ;//移动端使用rem
import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/mock/mock'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(VueCookies)

store.commit('updateToken');

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
