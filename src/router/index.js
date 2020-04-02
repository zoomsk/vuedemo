import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/page/index";
import Hello from "@/page/hello";
import Login from "@/page/login";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Index
        },
        {
            path: "/index",
            name: "index",
            component: Index
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/hello",
            name: "hello",
            component: Hello
        }]

})