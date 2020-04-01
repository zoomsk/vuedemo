<template>
    <div>
        <h1>index</h1>
        <div>this is template body</div>

        <div class="flex">
            <h2>1</h2>
            <h2>2</h2>
            <h2>3</h2>
            <h3>
                <img src="@/assets/images/logo.png" alt="logo">
                <img :src="logoUrl" alt="logo">
                <span>
                  <div>
                        <router-link to="./hello">hello</router-link>
                  </div>
                  <div>
                        <router-link to="./index">index</router-link>
                  </div>
                </span>
            </h3>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
                logoUrl: require('@/assets/images/logo.png')
            }
        },
    }
</script>

<style lang="stylus">
    @import "~@/assets/styles/base/variable.styl";


</style>