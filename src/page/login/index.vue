<template>
    <div>
        <h1>Login </h1>


        <input :value="username">
        <input :value="password">
        <button @click="login">login</button>

    </div>
</template>

<script>
//    import {teacherBind} from '@/request/api'
    export default{
        data(){
            return{
                msg:'hello vue',
                username: '',
                password: '',
            }
        },
        created(){
            console.log('1231:', this.$cookies.get('token'))
        },
        methods:{
            login(){
//                if(3>2){// 登录成功 设置token 跳转首页
                    this.$store.commit('updateToken', 'token123');
                    this.$router.push({
                        name: 'index'
                    })
//                } // 登录失败

                // 请求接口
//                teacherBind({
//                    userName: this.username,
//                    password: this.password
//                }).then(res => {
////                    this.$store.commit('updateToken', 'token123');
//                    console.log('catch',res)
//                }).catch(res => {
//                    console.log('catch',res)
//                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
            if(vm.$store.state.token){
                vm.$router.back(-1);

            }
            next();
            })
        }
    }
</script>

<style lang="stylus">
    @import "~@/assets/styles/base/variable.styl";



</style>