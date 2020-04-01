<template>
    <div>
        <h1>Login </h1>


        <input :value="username">
        <input :value="password">
        <button @click="login">login</button>

    </div>
</template>

<script>
    import {teacherBind} from '@/request/api'
    export default{
        data(){
            return{
                msg:'hello vue',
                username: '',
                password: '',
            }
        },
        created(){

        },
        methods:{
            login(){
                teacherBind({
                    userName: this.username,
                    password: this.password
                }).then(res => {
                    console.log('then',res)
                }).catch(res => {
                    console.log('catch',res)
                })
            }
        }
    }
</script>

<style lang="stylus">
    @import "~@/assets/styles/base/variable.styl";



</style>