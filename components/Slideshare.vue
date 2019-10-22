<template lang="pug" functional>
  .slideshare.image.is-16by9
    iframe.has-ratio.lazyload(
      :data-src="`//www.slideshare.net/slideshow/embed_code/key/${props.code}`",
      scrolling="no",
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
