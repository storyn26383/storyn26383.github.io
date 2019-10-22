<template lang="pug" functional>
  figure(:class="data.staticClass")
    picture.image(:class="props.s ? 'is-96x96' : 'is-128x128'")
      source(data-srcset="~/assets/images/avatar.jpg?webp", type="image/webp")
      source(data-srcset="~/assets/images/avatar.jpg", type="image/png")
      img.lazyload.is-rounded(data-src="~/assets/images/avatar.jpg")
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Avatar extends Vue {
    @Prop({ type: Boolean }) readonly s!: string
  }
</script>
