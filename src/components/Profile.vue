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
        <div class="ts big slate" style="min-height: 280px; margin-bottom: 0">
            <div class="image">
                <img src="../assets/bg.jpg">
            </div>
        </div>
        <div class="ts narrow container">
            <div style="position: absolute; left: 0; bottom: -60px;">
                <img class="ts small image" src="../assets/user.jpg" style="border: 10px solid #FFF; border-radius: 10px;">
            </div>
            <div style="    position: absolute; left: 170px; top: -40px; font-size: 1.7em; color: #FFF; text-shadow: 0 0 3px rgba(0,0,0,.8);">
                {{ nickname }}
            </div>
            <div style="position: absolute; left: 170px; top: 10px;">
                <button class="ts basic secondary button">
                    <i class="horizontal ellipsis icon"></i>
                    更多
                </button>
            </div>
        </div>
        <br><br><br><br><br>
        <div class="ts narrow container grid">
            <div class="ten wide column">
                <div class="ts dividing large header">
                    已獲得成就
                </div>
                <i class="handshake big icon"></i>
                <i class="heartbeat big icon"></i>
                <br><br><br>
                <div class="ts dividing large header" style="margin-top: 34px">
                    近期動態
                </div>
                <div class="ts active inline centered text loader" v-if="isLoading">
                    讀取中
                </div>
                <div class="ts feed" v-if="!isLoading">
                    <div class="event">
                        <div class="label">
                            <img src="../assets/user.jpg">
                        </div>
                        <div class="content">
                            <div class="summary">
                                <a>Yami Odymel</a> 和你成為了朋友。
                                <div class="date">
                                    1 小時前
                                </div>
                            </div>
                            <div class="meta">
                                <a><i class="like icon"></i> 4 個讚</a>
                            </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="label">
                            <img src="../assets/user.jpg">
                        </div>
                        <div class="content">
                            <div class="summary">
                                <a>羽田白音</a> 在他牆上分享了這則貼文。
                                <div class="date">
                                    3 小時前
                                </div>
                            </div>
                            <div class="extra images">
                                <a><img src="va.png"></a>
                                <a><img src="va.png"></a>
                            </div>
                            <div class="meta">
                                <a><i class="like icon"></i> 1 個讚</a>
                            </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="label">
                            <img src="../assets/user.jpg">
                        </div>
                        <div class="content">
                            <div class="summary">
                                <a class="user">
                                    Yami Odymel
                                </a> 在他牆上分享了這則貼文
                                <div class="date">
                                    1 天前
                                </div>
                            </div>
                            <div class="extra description">
                                準備向令一個平行世界的你道歉，因為你將在這個世界有所作為。
                            </div>
                            <div class="meta">
                                <a><i class="like icon"></i> 成為第一個讚的人</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="six wide column">
                <div class="ts dividing large header">
                    統計數據
                </div>
                <div class="ts horizontal statistics">
                    <div class="statistic">
                        <div class="value">3</div>
                        <div class="label">遊玩次數</div>
                    </div>
                    <div class="statistic">
                        <div class="value">14</div>
                        <div class="label">拜訪次數</div>
                    </div>
                </div>
                <div class="ts dividing large header">
                    鍛鍊評估
                </div>
                <div style="width: 340px; height: 340px; pointer-events: none; user-select: none;     margin: 0 auto;">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GlobalNavbar from './navbar.vue'
import store from 'store2'
import random from '../random.js'

export default {
    data() {
        return {
            nickname: '',
            isLoading: true,
        }
    },
    async mounted() {
        this.nickname = store('nickname')
        await random()
        this.isLoading = false

        var ctx = document.getElementById('myChart').getContext('2d');
        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['反應能力', '記憶能力', '洞察能力', '辨色能力', '總體能力值'],
                datasets: [{
                    data: [100, 50, 40, 50, 20]
                }]
            }
        })
        myRadarChart.options.legend.display = false
    },
    components: {
        GlobalNavbar
    }
}
</script>