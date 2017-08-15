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
    margin-top: 0;
    margin-bottom: 3rem;
    background-image: url(../assets/blueprint-pattern.png);
    min-height: 260px;
}
.ts.slate .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.25);
}
.ts.slate .header {
    color: #fff;
    margin-top: 1.9em;
    margin-bottom: .6em;
    font-size: 40px !important;
}

.ts.slate .description {
    font-size: 20px;
    color: #fff;
    margin-bottom: 3.5em;
}
</style>

<template>
    <div>
        <global-navbar></global-navbar>
        <div class="ts slate">
            <div class="cover">
                <div class="header">工作坊</div>
                <div class="description">遊玩其他人所發佈的額外修改內容。</div>
            </div>
        </div>
        <div class="ts narrow container">
            <div class="ts active inline centered text loader" v-if="isLoading">
                讀取中
            </div>
            <div class="ts four cards">
                <div class="ts card" v-for="item in items" :key="item.header">
                    <div class="image">
                        <img :src="item.image">
                    </div>
                    <div class="content">
                        <div class="header">
                            {{ item.header }}
                            <div class="sub header">{{ item.subHeader }}</div>
                        </div>
                        <div class="description" v-html="item.description"></div>
                        <br>
                        <a href="https://scratch.mit.edu/projects/2689542/" class="ts right floated right labeled icon button">
                            開始
                            <i class="chevron circle right icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalNavbar from './navbar.vue'
import random from '../random.js'

export default {
    components: {
        GlobalNavbar
    },
    data() {
        return {
            isLoading: false,
            items    : []
        }
    },
    async mounted() {
        this.isLoading = true
        await random()
        this.isLoading = false
        this.items = [{
            image: require('../assets/fight.png'),
            header: '過關斬將',
            subHeader: '1 人遊玩過',
            description: '透過電腦玩家訓練反應神經，並在培養決策與思考能力。'
        }]
    }
}
</script>