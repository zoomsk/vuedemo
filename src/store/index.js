import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import VueCookies from 'vue-cookies'
//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        token: ''
    },
    getter:{

    },
    mutations: {
        updateToken(state,token){
            token = token || VueCookies.get('token');
            if(!token){
                router.push({
                    name: 'login'
                })
                return false
            }
            state.token = token;
            VueCookies.set('token', token);

        }
    }
})

export default store