<template lang="pug" functional>
  .youtube.image.is-16by9
    iframe.has-ratio.lazyload(
      :data-src="`https://www.youtube.com/embed/${props.v}`"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen)
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Youtube extends Vue {
    @Prop({ type: String, required: true }) readonly v!: string
  }
</script>
