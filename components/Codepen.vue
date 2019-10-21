<template lang="pug" functional>
  iframe.codepen(
    scrolling="no",
    :src="`//codepen.io/storyn26383/embed/${props.pen}/?height=530&theme-id=0&default-tab=result&embed-version=2`",
    frameborder="no",
    allowtransparency="true")
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Codepen extends Vue {
    @Prop({ type: String, required: true }) readonly pen!: string
  }
</script>

<style lang="stylus" scoped>
  .codepen
    width 100%
    height 530px
</style>
