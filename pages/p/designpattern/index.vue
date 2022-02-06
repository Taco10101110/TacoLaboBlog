<template>
  <TclTexture class="background" :pattern="bgpattern" :color1="bgcolor1" :color2="bgcolor2" :color3="bgcolor3">
    <TclPanel class="panel" :pattern="'grass-01'">
      <h1 class="title">
        <TclTypography
          class="title-typo"
          :pattern="'retro-02'"
          :content="'工事中です'"
          :font="'Rampart One'"
        />
      </h1>
    </TclPanel>
  </TclTexture>
</template>
<script>
import TclTexture from '~/components/tacolib/TclTexture.vue'
export default {
  components: {
    TclTexture
  },
  layout: 'default',
  data: () => ({
    bgpattern: 'check-01',
    bgcolor1: '#F0F0F0',
    bgcolor2: '#0B2342',
    bgcolor3: '#51a9df'
  })
}
</script>
<style scoped lang="scss">
</style>
