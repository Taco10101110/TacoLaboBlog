<template>
  <div :class="['tcltexture-base', 'tcltexture-'+pattern]" :style="propstyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TclPatternBase',
  props: {
    pattern: {
      type: String,
      default: 'check-01'
    },
    color1: {
      type: String,
      default: '#F0F0F0'
    },
    color2: {
      type: String,
      default: '#0B2342'
    },
    color3: {
      type: String,
      default: '#51a9df'
    }
  },
  computed: {
    propstyle () {
      return {
        '--color1': `${this.hx2r(this.color1)}, ${this.hx2g(this.color1)}, ${this.hx2b(this.color1)}`,
        '--color2': `${this.hx2r(this.color2)}, ${this.hx2g(this.color2)}, ${this.hx2b(this.color2)}`,
        '--color3': `${this.hx2r(this.color3)}, ${this.hx2g(this.color3)}, ${this.hx2b(this.color3)}`
      }
    }
  },
  methods: {
    hx2r (hx) {
      return parseInt(hx.substring(1, 3), 16).toString()
    },
    hx2g (hx) {
      return parseInt(hx.substring(3, 5), 16).toString()
    },
    hx2b (hx) {
      return parseInt(hx.substring(5, 7), 16).toString()
    }
  }
}
</script>
<style scoped lang="scss">
</style>
