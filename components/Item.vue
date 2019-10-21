<template lang="pug" functional>
  li.item(:class="data.staticClass")
    h3.title(v-if="props.title") {{ props.title }}
      small.item-meta.has-text-weight-light(v-if="props.meta") {{ props.meta }}
    p.link(v-if="props.link")
      fa(:icon="['fas', 'link']")
      a(:href="props.link", target="_blank") {{ props.link }}
    slot
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Item extends Vue {
    @Prop({ type: String, required: true }) readonly title!: string
    @Prop({ type: String, default: '' }) readonly meta!: string
    @Prop({ type: String, default: '' }) readonly link!: string
  }
</script>

<style lang="stylus" scoped>
  .item
    & + .item
      margin-top 1rem

    &.column
      margin-top 0

  .title
    margin-bottom .5rem

    small
      font-size .65em
      padding-left .5em

  .link
    a
      color inherit
      margin-left .5em

      &:hover
        text-decoration underline
</style>
