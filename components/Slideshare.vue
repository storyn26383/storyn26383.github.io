<template lang="pug" functional>
  .slideshare.image.is-16by9
    iframe.has-ratio(
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
