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
  },
  computed: {
    propstyle() {
      return {
        "--content": `${this.content}`,
        "--color1": `${this.hx2r(this.color1)}, ${this.hx2g(
          this.color1
        )}, ${this.hx2b(this.color1)}`,
        "--color2": `${this.hx2r(this.color2)}, ${this.hx2g(
          this.color2
        )}, ${this.hx2b(this.color2)}`,
        "--color3": `${this.hx2r(this.color3)}, ${this.hx2g(
          this.color3
        )}, ${this.hx2b(this.color3)}`,
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
  background-repeat: repeat;
  font-size: 3em;
  font-family: 'Mochiy Pop P One', sans-serif;
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
    -webkit-text-stroke: 0.1em white;
  }

  &::after {
    text-shadow: 0.07em 0.08em 0.05em rgba(0, 0, 0, 0.75),
      -0.07em -0.05em 0.05em rgba(0, 0, 0, 0.75);
    z-index: -2;
  }
}
.tcltypography-retro-01 {
  background-image: linear-gradient(
    #032d50 25%,
    #00a1ef 35%,
    white 50%,
    #20125f 50%,
    #8313e7 55%,
    #ff61af 75%
  );
  background-clip: text;
  -webkit-text-stroke: 0.01em #94a0b9;
  -webkit-text-fill-color: transparent;
  @include retrostecker();
}
.tcltypography-retro-02 {
  background: linear-gradient(
      60deg,
      transparent 35%,
      #ffffff 49.95%,
      #ffffff 50.15%,
      transparent 65%
    ),
    linear-gradient(
      to right,
      rgb(var(--color1)),
      rgb(var(--color2)),
      rgb(var(--color3))
    );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.01em rgba(0, 0, 0, 0.6);
  @include retrostecker();
}
.tcltypography-retro-03 {
  position: relative;
  display: block;
  color: #cf1b1b;
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
    background-image: repeating-linear-gradient(45deg,transparent 0,transparent 2px,white 2px,white 4px);
    z-index: -1;
  }
  &::after {
    background-image: repeating-linear-gradient(135deg,transparent 0,transparent 2px,white 2px,white 4px);
  }
  
  &:hover {
    &::before{
      top: 5px;
      left: 5px;
    }
    &::after{
      top: -5px;
      left: -5px;
    }
  }
}
</style>
