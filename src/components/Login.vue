<style scoped>
.ts.menu {
    border: 0;
    border-radius: 0;
    z-index: 1;
    margin: 0;
}
.ts.menu .item {
    border: 0;
}
.ts.menu .register.item {
    color: #948771;
}
.ts.slate {
    margin-bottom: 3rem;
}
.ts.segment {
    width: 300px;
}
</style>

<template>
    <div>
        <global-navbar></global-navbar>
        <div class="ts big slate">
            <div class="header">登入</div>
            <div class="description">嗨，歡迎回來！</div>
        </div>
        <div>
            <div class="ts centered segment">
                <div class="ts negative message" v-if="incorrect">帳號或密碼錯誤。</div>
                <form class="ts form">
                    <div class="field">
                        <label>帳號</label>
                        <input type="text" v-model="account">
                    </div>
                    <div class="field">
                        <label>密碼</label>
                        <input type="password" v-model="password">
                    </div>
                    <button type="button" @click="submit" class="ts fluid positive button" :class="{loading: isLoading, disabled: isLoading}">送出</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalNavbar from './navbar.vue'
import store        from 'store2'
import random       from '../random.js'

export default {
    components: {
        GlobalNavbar
    },
    data() {
        return {
            account  : "",
            password : "",
            incorrect: false,
            isLoading: false
        }
    },
    methods: {
        async submit() {
            this.incorrect = false
            this.isLoading = true
            await random()
            this.isLoading = false
            if (this.account === store("account") && this.password === store("password")) {
                store("isLoggedIn", true)
                this.$router.push('profile')
            } else {
                this.incorrect = true
            }
        }
    }
}
</script>