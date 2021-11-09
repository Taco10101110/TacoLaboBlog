<template>
  <TclTexture
    class="background"
    :pattern="bgpattern"
    :color1="bgcolor1"
    :color2="bgcolor2"
    :color3="bgcolor3"
  >
    <TclPanel class="panel" :pattern="'grass-01'">
      <h1 class="title">
        <TclTypography
          class="title-typo"
          :pattern="'retro-02'"
          :content="'タイポグラフィ'"
          :font="'Rampart One'"
        />
      </h1>
      <TclPanel class="description" :pattern="'gradborder-01'">
        <p>
          見出し文字を効果的に装飾するタイポグラフィ。旧来は画像を張る方式が主流でしたが、令和時代はCSSだけで様々できます。
        </p>
        <p>
          画像に比べCSSは高速軽量、SEOにも強くなります。Googleフォントと組み合わせても効果的ですよ。
        </p>
      </TclPanel>
      <h2>テキスト入力</h2>
      <input v-model="sampletext" type="text" class="textbox" />
      <h2>フォント選択</h2>
      <div class="fontbuttons">
        <span class="fontbutton1 font-got" @click="font = 'Noto Sans Japanese'">ゴシック</span>
        <span class="fontbutton1 font-min" @click="font = 'Kaisei Tokumin'">明朝</span>
        <span class="fontbutton1 font-pop" @click="font = 'Mochiy Pop P One'">ポップ</span>
        <span class="fontbutton1 font-dec" @click="font = 'Rampart One'">飾り文字</span>
      </div>
      <h2>カラー選択</h2>
      <div class="colorbuttons">
        <input v-model="bgcolor1" type="color" class="colorbutton1" />
        <input v-model="bgcolor2" type="color" class="colorbutton1" />
        <input v-model="bgcolor3" type="color" class="colorbutton1" />
      </div>
      <h2>タイポグラフィ デザインパターン</h2>
      <div class="typos">
        <div v-for="pattern in patternList" :key="pattern.name" class="pattern">
          <h3>
            <TclTypography
              class="typo-h"
              :pattern="pattern.name"
              :content="pattern.desc"
              :font="font"
              :color1="bgcolor1"
              :color2="bgcolor2"
              :color3="bgcolor3"
            />
          </h3>
          <p>
            <TclTypography
              class="typo-p"
              :pattern="pattern.name"
              :content="sampletext"
              :font="font"
              :color1="bgcolor1"
              :color2="bgcolor2"
              :color3="bgcolor3"
            />
          </p>
        </div>
      </div>
    </TclPanel>
  </TclTexture>
</template>
<script>
import TclPanel from "~/components/tacolib/TclPanel.vue";
import TclTypography from "~/components/tacolib/TclTypography.vue";
import TclTexture from "~/components/tacolib/TclTexture.vue";
export default {
  components: {
    TclPanel,
    TclTypography,
    TclTexture,
  },
  layout: "default",
  data: () => ({
    bgpattern: "check-01",
    sampletext: "貴殿の好きなテキストを入力してください",
    font: "Mochiy Pop P One",
    bgcolor1: "#F0F0F0",
    bgcolor2: "#0B2342",
    bgcolor3: "#51a9df",
    patternList: [
      { name: "gradation-01", type: "grad", desc: "グラデーション" },
      { name: "gradation-02", type: "grad", desc: "キラリンッ" },
      { name: "blight-01", type: "blight", desc: "ネオン" },
      { name: "pop-01", type: "pop", desc: "ポップアート" },
      //{ name: 'pop-02', type: 'pop', desc: 'ポップヘッドライン' },
      { name: "retro-02", type: "retro", desc: "ステッカー" },
      { name: "retro-03", type: "retro", desc: "ストライプ" },
      { name: "retro-01", type: "retro", desc: "レイヤー" },
      { name: "monotone-01", type: "mono", desc: "モノトーン" },
    ],
  }),
  computed: {},
  methods: {
    FilterPatterns(type) {
      return this.patternList.filter((v) => {
        return v.type === type;
      });
    },
  },
};
</script>
<style scoped lang="scss">
.background {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .panel {
    border-radius: 3vw;
    h1,
    h2,
    h3 {
      margin-top: 1em;
      margin-bottom: 0.2em;
    }
    .title {
      text-align: center;
      font-size: 5em;
      font-weight: bold;
    }
    .description {
      font-size: 0.8rem;
      margin: 1rem auto;
    }
    .textbox {
      width: 100%;
      background: lightgray;
    }
    .colorbuttons,
    .fontbuttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .colorbutton1,
      .colorbutton2,
      .fontbutton1,
      .fontbutton2 {
        height: 3rem;
      }
      .fontbutton1,
      .fontbutton2 {
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #a0a0a080;
        background: #e0e0e0ff;
      }
      .font-got {
        font-family: "Noto Sans Japanese";
      }
      .font-min {
        font-family: "Kaisei Tokumin";
      }
      .font-pop {
        font-family: "Mochiy Pop P One";
      }
      .font-dec {
        font-family: "Rampart One";
      }
    }
    .typos {
      .pattern{
        margin-bottom: 2em;
        .typo-h {
          font-weight: bold;
          margin-top: -8%;
          // font-family: 'Mochiy Pop P One', sans-serif;
        }
      }
    }
  }
  @include mq(SPTB) {
    .panel {
      width: 80%;
      min-height: 80vh;
      margin: 10% 10%;
      .title {
        font-size: 2em;
        margin-top: -30px;
      }
      .description {
        width: 80%;
      }
      .colorbuttons,
      .fontbuttons {
        .colorbutton1 {
          width: 50%;
        }
        .colorbutton2 {
          width: 100%;
        }
        .fontbutton1 {
          width: 49%;
          margin: 0 0.5%;
        }
        .fontbutton2 {
          width: 99%;
          margin: 0 0.5%;
        }
        
        .fontbutton1,
        .fontbutton2 {
          font-size: 1em;
        }
      }
      .typos{
        .pattern{         
          .typo-h {
            font-size: 1.5em;
          }
          .typo-p {
            font-size: 1em;
          }
        }
      }
    }
  }
  @include mq(PCXL) {
    .panel {
      width: 70%;
      max-width: 600px;
      min-height: 70vh;
      margin: 15% 15%;
      .title {
        font-size: 4em;
        margin-top: -8%;
      }
      .description {
        width: 50%;
      }
      .colorbuttons,
      .fontbuttons {
        .colorbutton1 {
          width: 25%;
        }
        .colorbutton2 {
          width: 50%;
        }
        .fontbutton1 {
          width: 24%;
          margin: 0 0.5%;
        }
        .fontbutton2 {
          width: 49%;
          margin: 0 0.5%;
        }
        .fontbutton1,
        .fontbutton2 {
          font-size: 1.6em;
        }
      }
      .typos{
        .pattern{         
          .typo-h {
            font-size: 2.5em;
          }
          .typo-p {
            font-size: 1.5em;
          }
        }
      }
    }
  }
}
</style>
