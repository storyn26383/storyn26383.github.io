<template lang="pug" functional>
  ul.items.is-unstyled(:class="data.staticClass")
    slot
</template>

<style lang="stylus" scoped>
  .is-unstyled
    list-style none
    margin 0
    padding 0
</style>
