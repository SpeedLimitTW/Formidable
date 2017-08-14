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
            <div class="ts four cards">
                <div class="ts card">
                    <div class="image">
                        <img src="../assets/bg.jpg">

                    </div>
                    <div class="content">
                        <div class="header">
                            三十公分
                            <div class="sub header">由 測試人員 製作</div>
                        </div>
                        <p>你將會在這裡看見一個魔法師的日常生活，</p>
                        <p>沒錯，只要你能夠單身三十年，</p>
                        <p>你也可以跟我一樣成為魔法師。</p>
                        <button class="ts right floated right labeled icon button">
                            開始
                            <i class="chevron circle right icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ts card">
                    <div class="image">
                        <img src="../assets/bg.jpg">

                    </div>
                    <div class="content">
                        <div class="header">
                            三十公分
                            <div class="sub header">由 測試人員 製作</div>
                        </div>
                        <p>你將會在這裡看見一個魔法師的日常生活，</p>
                        <p>沒錯，只要你能夠單身三十年，</p>
                        <p>你也可以跟我一樣成為魔法師。</p>
                        <button class="ts right floated right labeled icon button">
                            開始
                            <i class="chevron circle right icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ts card">
                    <div class="image">
                        <img src="../assets/bg.jpg">

                    </div>
                    <div class="content">
                        <div class="header">
                            三十公分
                            <div class="sub header">由 測試人員 製作</div>
                        </div>
                        <p>你將會在這裡看見一個魔法師的日常生活，</p>
                        <p>沒錯，只要你能夠單身三十年，</p>
                        <p>你也可以跟我一樣成為魔法師。</p>
                        <button class="ts right floated right labeled icon button">
                            開始
                            <i class="chevron circle right icon"></i>
                        </button>
                    </div>
                </div>
                <div class="ts card">
                    <div class="image">
                        <img src="../assets/bg.jpg">

                    </div>
                    <div class="content">
                        <div class="header">
                            三十公分
                            <div class="sub header">由 測試人員 製作</div>
                        </div>
                        <p>你將會在這裡看見一個魔法師的日常生活，</p>
                        <p>沒錯，只要你能夠單身三十年，</p>
                        <p>你也可以跟我一樣成為魔法師。</p>
                        <button class="ts right floated right labeled icon button">
                            開始
                            <i class="chevron circle right icon"></i>
                        </button>
                    </div>
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