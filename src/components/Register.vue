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
            <div class="header">註冊</div>
            <div class="description">歡迎成為我們的一份子！</div>
        </div>
        <div>
            <div class="ts centered segment">
                <form class="ts form">
                    <div class="field">
                        <label>帳號</label>
                        <input type="text" v-model="account">
                    </div>
                    <div class="field">
                        <label>暱稱</label>
                        <input type="text" v-model="nickname">
                    </div>
                    <div class="field">
                        <label>密碼</label>
                        <input type="password" v-model="password">
                    </div>
                    <button type="button" class="ts fluid positive button" @click="submit" :class="{loading: isLoading, disabled: isLoading}">送出</button>
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
            account: '',
            password: '',
            nickname: '',
            isLoading: false
        }
    },
    methods: {
        async submit() {
            this.isLoading = true
            await random()
            this.isLoading = false
            store({
                account: this.account,
                password: this.password,
                nickname: this.nickname,
            })
            this.$router.push('login')
        }
    }
}
</script>