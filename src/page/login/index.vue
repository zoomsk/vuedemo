<template>
    <div>


        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<script>

    import { teacherGet,teacherBind} from '@/request/api'
//    import axios from 'axios'
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
        mounted(){
            teacherGet( ).then(res => {
                console.log('catch2',res)
            }).catch(res => {
                console.log('catch2',res)
            })
        },
        methods:{
            onSubmit(){

//                    this.$store.commit('updateToken', 'token123');
//                    this.$router.push({
//                        name: 'index'
//                    })
                // 请求接口
                teacherBind({
                    userName: this.username,
                    password: this.password
                }).then(res => {
//                    this.$store.commit('updateToken', 'token123');
                    console.log('catch',res)
                }).catch(res => {
                    console.log('catch',res)
                })
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