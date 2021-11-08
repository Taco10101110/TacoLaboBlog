<template>
  <TclTexture class="background" :pattern="bgpattern" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
    <TclPanel class="panel" :pattern="'grass-01'">
      <h2>タイポグラフィ- デザインパターン</h2>
      <TclPanel class="description" :pattern="'gradborder-01'">
        <p>見出し文字を効果的に装飾するタイポグラフィ。旧来は画像を張る方式が主流でしたが、令和時代はCSSだけで様々できます。</p>
        <p>画像に比べCSSは高速軽量、SEOにも強くなります。Googleフォントと組み合わせても効果的ですよ。</p>
      </TclPanel>
      <h3>スタイルを選択</h3>
      <div class="colorbuttons">
        <input v-model="bgcolor1" type="color" class="colorbutton1">
        <input v-model="bgcolor2" type="color" class="colorbutton1">
        <input v-model="bgcolor3" type="color" class="colorbutton1">
      </div>
      <h3>タイポグラフィ</h3>
        <div class="typos">
        <div v-for="pattern in patternList" :key="pattern.name" class="pattern">
          <h2>
            <TclTypography
              class="texture"
              :pattern="pattern.name"
              :content="pattern.desc"
              :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3"
            />
          </h2>
        </div>
      </div>
    </TclPanel>
  </TclTexture>
</template>
<script>
import TclPanel from '~/components/tacolib/TclPanel.vue'
import TclTypography from '~/components/tacolib/TclTypography.vue'
import TclTexture from '~/components/tacolib/TclTexture.vue'
export default {
  components: {
    TclPanel,
    TclTypography,
    TclTexture
  },
  layout: 'default',
  data: () => ({
    bgpattern: 'check-01',
    bgcolor1: '#F0F0F0',
    bgcolor2: '#0B2342',
    bgcolor3: '#51a9df',
    patternList: [
      { name: 'retro-01', type: 'retro', desc: 'レトロ' },
      { name: 'retro-02', type: 'retro', desc: 'レトロ' },
      { name: 'retro-03', type: 'retro', desc: 'レトロ' }
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
    .description{
      font-size:0.8rem;
      margin: 1rem auto;
    }
    .h2,h3{
      margin-top: 0.6rem;
      margin-bottom: 0.2rem;
    }
    .colorbuttons{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .colorbutton1,.colorbutton2{
        height: 3rem;
      }
    }
  }
  @include mq(SPTB){
    .panel{
      width: 80%;
      min-height: 80vh;
      margin: 10% 10%;
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
    }
  }
  @include mq(PCXL){
    .panel{
      width: 70%;
      min-height: 70vh;
      margin: 15% 15%;
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
    }
  }
}
</style>
