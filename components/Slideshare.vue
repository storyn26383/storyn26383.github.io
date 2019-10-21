<template lang="pug" functional>
  .slideshare
    iframe(
      scrolling="no",
      :src="`//www.slideshare.net/slideshow/embed_code/key/${props.code}`",
      frameborder="no",
      allowtransparency="true")
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Slideshare extends Vue {
    @Prop({ type: String, required: true }) readonly code!: string
  }
</script>

<style lang="stylus" scoped>
  .slideshare
    position relative
    width 100%
    height 0
    padding-top 63.25%

    iframe
      position absolute
      top 0
      left 0
      width 100%
      height 100%
</style>
