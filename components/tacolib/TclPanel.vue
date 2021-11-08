<template>
  <div :class="['tclpanel-base', 'tclpanel-'+pattern]">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'TclPanel',
  props: {
    pattern: {
      type: String,
      default: 'grass-01'
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
  }
}
</script>
<style scoped lang="scss">
.tclpanel-base{
    padding: 10px;
}
.tclpanel-grass-01{
  background: #e9e9e99f;
  backdrop-filter: blur(5px) grayscale(0.3);
  border: solid 1px #b0b0b042;
}
.tclpanel-gradborder-01{
  position: relative;
  z-index: 0;
  &::before,&::after{
    content: "";
    position: absolute;
  }
  &::before{
    top:3px;left:3px;right:3px;bottom:3px;
    background: rgb(var(--color1));
    z-index: -1;
  }
  &::after{
    top:0px;left:0px;right:0px;bottom:0px;
    background-image: linear-gradient(60deg, rgb(var(--color2)) 0%,rgb(var(--color3)) 70%,rgb(var(--color2)) 100%);
    z-index: -2;
  }
}
</style>
