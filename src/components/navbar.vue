<style scoped>
.ts.menu {
    border: 0;
    border-radius: 0;
    z-index: 1;
    margin: 0;
    box-shadow: 0px 1px 4px 4px rgba(0, 0, 0, 0.01);
}
.ts.menu .item {
    border: 0;
}
.ts.menu .register.item {
    color: #948771;
}
</style>

<template>
    <div class="ts large menu">
        <div class="ts narrow container">
            <div class="horizontally fitted item">
                <router-link to="/"><img class="ts small image" src="../assets/logo.png"></router-link>
            </div>
            <div class="right menu" v-if="!isLoggedIn">
                <router-link to="login" class="item">登入</router-link>
                <router-link to="register" class="register item">註冊</router-link>
            </div>
            <div class="right menu" v-if="isLoggedIn">
                <router-link to="profile" class="register item">{{ nickname }}</router-link>
                <a @click="logout" class="item">登出</a>
            </div>
        </div>
    </div>
</template>

<script>
import store from 'store2'

export default {
    data() {
        return {
            nickname  : '',
            isLoggedIn: false
        }
    },
    mounted() {
        this.nickname = store('nickname')
        this.isLoggedIn = store('isLoggedIn')
    },
    methods: {
        logout() {
            store.remove('isLoggedIn')
            location.reload()
        }
    }
}
</script>