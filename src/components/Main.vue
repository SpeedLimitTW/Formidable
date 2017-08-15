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
.ts.slate {
    margin-top: 0;
    margin-bottom: 3rem;
    background-image: url(../assets/retro-pattern.png);
    min-height: 530px;
}
.ts.slate .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
}
.ts.slate .header {
    color: #968973;
    margin-top: 1.9em;
    margin-bottom: .6em;
    font-size: 40px !important;
}

.ts.slate .description {
    font-size: 20px;
    margin-bottom: 3.5em;
}
.ts.slate .image {
    position: relative;
    border-radius: 10px;
    width: 200px;
    height: 140px;
    object-fit: cover;
    margin: 0 1em;
    box-shadow: 0px 1px 20px 4px rgba(0, 0, 0, 0.08);
}
.ts.slate .centered.image {
    width: 300px;
    height: 180px;
}
.ts.slate .center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.ts.slate a {
    font-size: 2.1em;
    color: #999;
    pointer-events: none;
}
</style>

<template>
    <div>
        <global-navbar></global-navbar>
        <div class="ts slate">
            <div class="cover">
                <div class="header">這是一個腦力訓練園地。</div>
                <div class="description">你能夠在這裡鍛鍊、提升腦力，亦能與大家一並同樂。</div>
                <div class="center">
                    <a href="#!"><i class="chevron circle left icon"></i></a>
                    <img class="ts image" src="../assets/memory.png">
                    <img class="ts image" src="../assets/reaction.png">
                    <img class="ts centered image" src="../assets/right.png">
                    <img class="ts image" src="../assets/watch.png">
                    <img class="ts image" src="../assets/memory.png">
                    <a href="#!"><i class="chevron circle right icon"></i></a>
                </div>
            </div>

        </div>
        <div class="ts narrow container relaxed grid">
            <div class="ten wide column">
                <div class="ts big dividing header">
                    工作坊
                    <div class="sub header">遊玩別人所創作的內容！</div>
                    <router-link to="workshop" class="ts basic secondary button" style="font-size: .5em; position: absolute; right: 0; bottom: 15px;">更多</router-link>
                </div>
                <div class="ts active inline centered text loader" v-if="isLoading" style="margin-top: 50px; margin-bottom: 50px;">
                    讀取中
                </div>
                <div class="ts items">
                    <div class="item" v-for="item in workshop" :key="item.header">
                        <div class="image">
                            <img :src="item.image">
                        </div>
                        <div class="content">
                            <a href="https://scratch.mit.edu/projects/2689542/" class="header">{{ item.header }}</a>
                            <div class="meta">
                                <span v-for="meta in item.meta" :key="meta.text">{{ meta.text }}</span>
                            </div>
                            <div class="description">
                                {{ item.description }}
                            </div>
                            <div class="extra">
                                {{ item.extra }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="six wide column">
                <div class="ts big dividing header">
                    玩家動態
                    <div class="sub header">網站上的最新動態。</div>
                </div>
                <div class="ts feed" v-if="!isLoading">
                    <div class="event">
                        <div class="label">
                            <img src="../assets/user.jpg">
                        </div>
                        <div class="content">
                            <div class="summary">
                                <a>{{ nickname }}</a> 解鎖了成就。
                                <div class="date">
                                    3 小時前
                                </div>
                            </div>
                            <div class="extra description">
                                <i class="handshake big icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script>
import GlobalNavbar from './navbar.vue'
import random from '../random.js'
import store from 'store2'

export default {
    components: {
        GlobalNavbar
    },
    data() {
        return {
            nickname: '',
            isLoading: true,
            workshop: []
        }
    },
    async mounted() {
        this.nickname = store('nickname')
        await random()
        this.isLoading = false
        this.workshop = [
            {
                image: require('../assets/fight.png'),
                header: '過關斬將',
                meta: [
                    {
                        text: '1 人遊玩過'
                    }
                ],
                description: '透過電腦玩家訓練反應神經，並在培養決策與思考能力。',
                extra: '由 Yami Odymel 發布',
            }
        ]
    }
}
</script>