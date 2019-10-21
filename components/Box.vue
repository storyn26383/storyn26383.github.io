<template lang="pug" functional>
  article(:class="data.staticClass")
    .content
      h2.title.is-uppercase.has-text-primary(v-if="props.title")
        span.title-pipe.has-background-primary
        span {{ props.title }}
      slot
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Box extends Vue {
    @Prop({ type: String, default: '' }) readonly title!: string
  }
</script>

<style lang="stylus" scoped>
  .title
    display flex
    align-items center

    &-pipe
      width .3rem
      height 1em
      margin-right .6rem
</style>
