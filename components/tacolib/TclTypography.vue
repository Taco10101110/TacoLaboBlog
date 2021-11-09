<template>
  <span
    :class="['tcltypography-base', 'tcltypography-' + pattern]"
    :style="propstyle"
    :data-text="content"
  >
    {{ content }}
  </span>
</template>
<script>
export default {
  name: "TclTypography",
  props: {
    pattern: {
      type: String,
      default: "check-01",
    },
    content: {
      type: String,
      default: "the Typography",
    },
    color1: {
      type: String,
      default: "#F0F0F0",
    },
    color2: {
      type: String,
      default: "#0B2342",
    },
    color3: {
      type: String,
      default: "#51a9df",
    },
    font: {
      type: String,
      default: "",
    },
  },
  computed: {
    propstyle() {
      return {
        "--color1": `${this.hx2r(this.color1)}, ${this.hx2g(
          this.color1
        )}, ${this.hx2b(this.color1)}`,
        "--color2": `${this.hx2r(this.color2)}, ${this.hx2g(
          this.color2
        )}, ${this.hx2b(this.color2)}`,
        "--color3": `${this.hx2r(this.color3)}, ${this.hx2g(
          this.color3
        )}, ${this.hx2b(this.color3)}`,
        "--font": this.font != ''? `"${this.font}", "Source Sans Pro"`: '"Source Sans Pro"'
      };
    },
  },
  methods: {
    hx2r(hx) {
      return parseInt(hx.substring(1, 3), 16).toString();
    },
    hx2g(hx) {
      return parseInt(hx.substring(3, 5), 16).toString();
    },
    hx2b(hx) {
      return parseInt(hx.substring(5, 7), 16).toString();
    },
  },
};
</script>
<style scoped lang="scss">
.tcltypography-base {
  font-family: var(--font);
  background-repeat: repeat;
}
@mixin retrostecker {
  position: relative;
  z-index: 0;
  &::before,
  &::after {
    position: absolute;
    content: attr(data-text);
    color: #fff;
    top: 0;
    left: 0;
  }
  &::before {
    z-index: -1;
    -webkit-text-stroke: 0.2em white;
  }

  &::after {
    text-shadow: 0.07em 0.08em 0.05em rgba(0, 0, 0, 0.75),
      -0.07em -0.05em 0.05em rgba(0, 0, 0, 0.75);
    z-index: -2;
  }
}
.tcltypography-retro-01 {
  color: #fcedd8;
  text-shadow: 2px 1px 0px #eb452b, 4px 2px 0px #efa032, 6px 3px 0px #46b59b,
    8px 4px 0px #017e7f, 10px 5px 0px #052939;
}
.tcltypography-retro-02 {
  background: linear-gradient(60deg,transparent 35%,#ffffff 49.95%,#ffffff 50.15%,transparent 65%),
    linear-gradient(to right,rgb(var(--color1)),rgb(var(--color2)),rgb(var(--color3)));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.02em rgba(0, 0, 0, 0.6);
  @include retrostecker();
}
.tcltypography-retro-03 {
  position: relative;
  color: rgb(var(--color2));
  cursor: pointer;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    color: transparent;
    background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }
  &::before {
    background-image:
      repeating-linear-gradient(45deg,transparent 0,transparent 0.05em,rgb(var(--color1)) 0.05em,rgb(var(--color1)) 0.1em);
    z-index: -1;
  }
  &::after {
    background-image: 
      repeating-linear-gradient(135deg,transparent 0,transparent 0.05em,rgb(var(--color1)) 0.05em,rgb(var(--color1)) 0.1em);
  }

  &:hover {
    &::before {top: 0.1em;left: 0.1em;}
    &::after {top: -0.1em;left: -0.1em;}
  }
}
.tcltypography-gradation-01 {
  background-image: 
    linear-gradient(to right,rgb(var(--color2)),rgb(var(--color3)));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500%;
  animation: bgmove 2s ease 0s infinite both alternate;
}
.tcltypography-gradation-02 {
  background-image: 
    linear-gradient(to right,rgb(var(--color2)) 40%,white 65%,rgb(var(--color2)) 80%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% 100%;
  animation: bgwaitmove 3s ease 0s infinite both normal;
}
@keyframes bgmove {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
@keyframes bgwaitmove {
  0%,
  80% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}
.tcltypography-pop-01 {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.01em;
  -webkit-text-stroke-color: rgb(var(--color1));
  text-shadow: 0.05em 0.05em rgb(var(--color3)), 0.1em 0.1em rgb(var(--color2));
}

.tcltypography-monotone-01 {
  color: rgb(var(--color2));
  background-color: rgb(var(--color1));
  position: relative;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(var(--color2));
    color: rgb(var(--color1));
    clip-path: inset(-1% -1% 50% -1%);
  }
}
.tcltypography-blight-01 {
  color: rgb(var(--color1));
  animation: neon 3s infinite;
}

@keyframes neon {
  0%, 100% {
    text-shadow: -1px -1px 1px rgba(var(--color1),0.6),
      -1px 1px 1px rgba(var(--color1),0.6),
      1px -1px 1px rgba(var(--color1),0.6),
      1px 1px 1px rgba(var(--color1),0.6), 
      0 0 0.01em rgba(var(--color1),0.6),
      0 0 0.02em rgba(var(--color1),0.6),
      0 0 0.03em rgba(var(--color1),0.6),
      0 0 0.04em rgba(var(--color3),0.6),
      0 0 0.05em rgba(var(--color3),0.6),
      0 0 0.1em rgba(var(--color3),0.6),
      0 0 0.2em rgba(var(--color3),0.6),
      0 0 0.3em rgba(var(--color3),0.6),
      0 0 0.4em rgba(var(--color3),0.6);
  }
  50% {
    text-shadow: -1px -1px 1px rgba(var(--color1),1),
      -1px 1px 1px rgba(var(--color1),1),
      1px -1px 1px rgba(var(--color1),1),
      1px 1px 1px rgba(var(--color1),1), 
      0 0 0.02em rgba(var(--color1),1),
      0 0 0.03em rgba(var(--color1),1),
      0 0 0.04em rgba(var(--color1),1),
      0 0 0.05em rgba(var(--color3),1),
      0 0 0.1em rgba(var(--color3),1),
      0 0 0.2em rgba(var(--color3),1),
      0 0 0.3em rgba(var(--color3),1),
      0 0 0.4em rgba(var(--color3),1),
      0 0 0.5em rgba(var(--color3),1);
  }
}
</style>
