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
                <div class="ts items">
                    <div class="item">
                        <div class="image">
                            <img src="../assets/va.png">
                        </div>
                        <div class="content">
                            <a class="header">吻仔魚</a>
                            <div class="meta">
                                <span>$32 元</span>
                            </div>
                            <div class="description">
                                一般可分為淡水魚魩仔魚與海水魚魩仔魚兩類。 根據臺灣大學王友慈博士指出，魩仔魚是單一種魚類， 是沙丁魚苗，若撈捕作業不正確有可能撈到數十至一百五十種類的魚苗。
                            </div>
                            <div class="extra">
                                維基百科
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="image">
                            <img src="../assets/va.png">
                        </div>
                        <div class="content">
                            <a class="header">芒果</a>
                            <div class="meta">
                                <span>Mango</span>
                            </div>
                            <div class="description">
                                是芒果屬的一種植物和果實，原產自北印度和馬來半島， 在梵語中叫作āmra，音譯為「菴羅」，或叫作āmalaka， 音譯為「菴摩勒」、「菴摩羅」、「阿摩落伽」。
                            </div>
                            <div class="extra">
                                維基百科
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="six wide column">
                <div class="ts big dividing header">
                    玩家動態
                    <div class="sub header">收集</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalNavbar from './navbar.vue'

export default {
    components: {
        GlobalNavbar
    }
}
</script>