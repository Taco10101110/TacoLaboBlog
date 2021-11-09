<template>
  <TclTexture class="background" :pattern="bgpattern" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
    <TclPanel class="panel" :pattern="'grass-01'">
      <h1 class="title">
        <TclTypography
          class="title-typo"
          :pattern="'retro-02'"
          :content="'テクスチャ'"
          :font="'Rampart One'"
        />
      </h1>
      <TclPanel class="description" :pattern="'gradborder-01'">
        <p>様々な質感を表現しWebデザインにリアリティを出すテクスチャ。旧来は画像を張る方式が主流でしたが、令和時代はCSSグラデーションを駆使します。</p>
        <p>高コントラストだとポップで元気な、低コントラストだと上品で落ち着いた印象を与えます。色やパターンを選んで試してみてください。</p>
      </TclPanel>
      <h2>色を選択</h2>
      <div class="colorbuttons">
        <input v-model="bgcolor1" type="color" class="colorbutton1">
        <input v-model="bgcolor2" type="color" class="colorbutton1">
        <input v-model="bgcolor3" type="color" class="colorbutton1">
      </div>
      <h2>テクスチャ デザインパターン</h2>
      <h3>チェック</h3>
      <div class="patterns">
        <div v-for="pattern in FilterPatterns('check')" :key="pattern.name" class="pattern" @click="bgpattern=pattern.name">
          <TclTexture class="texture" :pattern="pattern.name" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
            <p>{{ pattern.desc }}</p>
          </TclTexture>
        </div>
      </div>
      <h3>立体</h3>
      <div class="patterns">
        <div v-for="pattern in FilterPatterns('3dbox')" :key="pattern.name" class="pattern" @click="bgpattern=pattern.name">
          <TclTexture class="texture" :pattern="pattern.name" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
            <p>{{ pattern.desc }}</p>
          </TclTexture>
        </div>
      </div>
      <h3>ドット</h3>
      <div class="patterns">
        <div v-for="pattern in FilterPatterns('dots')" :key="pattern.name" class="pattern" @click="bgpattern=pattern.name">
          <TclTexture class="texture" :pattern="pattern.name" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
            <p>{{ pattern.desc }}</p>
          </TclTexture>
        </div>
      </div>
      <h3>マーク</h3>
      <div class="patterns">
        <div v-for="pattern in FilterPatterns('marks')" :key="pattern.name" class="pattern" @click="bgpattern=pattern.name">
          <TclTexture class="texture" :pattern="pattern.name" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
            <p>{{ pattern.desc }}</p>
          </TclTexture>
        </div>
      </div>
      <h3>ストライプ</h3>
      <div class="patterns">
        <div v-for="pattern in FilterPatterns('stripe')" :key="pattern.name" class="pattern" @click="bgpattern=pattern.name">
          <TclTexture class="texture" :pattern="pattern.name" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
            <p>{{ pattern.desc }}</p>
          </TclTexture>
        </div>
      </div>
    </TclPanel>
  </TclTexture>
</template>
<script>
import TclPanel from '~/components/tacolib/TclPanel.vue'
import TclTexture from '~/components/tacolib/TclTexture.vue'
import TclTypography from "~/components/tacolib/TclTypography.vue";
export default {
  components: {
    TclPanel,
    TclTexture,
    TclTypography
  },
  layout: 'default',
  data: () => ({
    bgpattern: 'check-01',
    bgcolor1: '#F0F0F0',
    bgcolor2: '#0B2342',
    bgcolor3: '#51a9df',
    patternList: [
      { name: 'check-01', type: 'check', desc: '点線布地' },
      { name: 'check-02', type: 'check', desc: 'テーブルクロス' },
      { name: 'check-03', type: 'check', desc: '半透明チェック' },
      { name: 'dots-01', type: 'dots', desc: '点ドット' },
      { name: 'dots-02', type: 'dots', desc: '穴あきドット' },
      { name: 'dots-03', type: 'dots', desc: '丸ドット' },
      { name: '3dbox-01', type: '3dbox', desc: 'ざらざら' },
      { name: '3dbox-02', type: '3dbox', desc: '格子編み' },
      { name: '3dbox-03', type: '3dbox', desc: 'つるつる' },
      { name: '3dbox-04', type: '3dbox', desc: 'でこぼこ' },
      { name: 'marks-01', type: 'marks', desc: '虹' },
      { name: 'marks-02', type: 'marks', desc: 'ダイヤ' },
      { name: 'marks-03', type: 'marks', desc: '丸ダイヤ' },
      { name: 'marks-04', type: 'marks', desc: 'ハート' },
      { name: 'marks-05', type: 'marks', desc: '星' },
      { name: 'marks-06', type: 'marks', desc: 'レンガ' },
      { name: 'marks-07', type: 'marks', desc: '波' },
      { name: 'marks-08', type: 'marks', desc: '千鳥' },
      { name: 'stripe-01', type: 'stripe', desc: '斜めストライプ' },
      { name: 'stripe-02', type: 'stripe', desc: 'メタル' },
      { name: 'stripe-03', type: 'stripe', desc: '縦ストライプ' }
    ]
  }),
  computed: {
  },
  methods: {
    FilterPatterns (type) {
      return this.patternList.filter((v) => { return v.type === type })
    }
  }
}
</script>
<style scoped lang="scss">
.background{
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .panel{
    border-radius: 3vw;
    max-width: 600px;
    h1,
    h2,
    h3 {
      margin-top: 1em;
      margin-bottom: 0.2em;
    }
    .title {
      text-align: center;
      font-weight: bold;
    }
    .description{
      font-size:0.8rem;
      margin: 1rem auto;
    }
    .colorbuttons{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .colorbutton1,.colorbutton2{
        height: 3rem;
      }
    }
    .patterns{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .pattern{
        .texture{
          margin: 1% 2% ;
          padding: 5px;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          p{
            margin: 2rem 5px 5px 5px;
            padding: 0.2rem;
            min-height: 4em;
            display: flex;
            align-items: flex-end;
            background: linear-gradient(10deg, white 5%,transparent 50%);
            font-weight: bold;
            -webkit-text-stroke: 0.2px #FFF;
          }
        }
      }
    }
  }
  @include mq(SPTB){
    .panel{
      width: 80%;
      min-height: 80vh;
      margin: 10% 10%;
      .title {
        font-size: 2em;
        margin-top: -30px;
      }
      .description{
        width:80%;
      }
      .colorbuttons{
        .colorbutton1{
          width: 50%;
        }
        .colorbutton2{
          width: 100%;
        }
      }
      .patterns{
        .pattern{
          width: 50%;
        }
      }
    }
  }
  @include mq(PCXL){
    .panel{
      width: 70%;
      min-height: 70vh;
      margin: 15% 15%;
      .title {
        font-size: 4em;
        margin-top: -8%;
      }
      .description{
        width:50%;
      }
      .colorbuttons{
        .colorbutton1{
          width: 25%;
        }
        .colorbutton2{
          width: 50%;
        }
      }
      .patterns{
        .pattern{
          width: 25%;
        }
      }
    }
  }
}
</style>
