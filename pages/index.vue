<template lang="pug">
  .index-page
    .section
      .container
        box.name
          .media
            figure.media-left.is-hidden-desktop
              .image.is-96x96
                img.is-rounded(src="~/assets/images/avatar.jpg")
            .media-content
              h1.title.is-2
                span.is-uppercase.has-text-primary.has-text-weight-bold Sasaya
                small.position.subtitle.is-4.is-block-touch Full-Stack Web Developer

        box.about
          .media
            figure.media-left.is-hidden-touch
              .image.is-128x128
                img.is-rounded(src="~/assets/images/avatar.jpg")
            .media-content
              p Over 10 years of experience as a Full-Stack engineer about web development.
              p Good at PHP, Laravel, JavaScript, Vue, Ruby, CSS, Vim.
              p Team work and team management experience.
              p Write plugins to speed up development, such as Babel plugin, VIM package.
              p Let company's Slack robot have the function of switching iron gates for laziness of daily life.
        box
          p
            a(href="https://github.com/storyn26383", target="_blank")
              fa(:icon="['fab', 'github']", size="2x")
            span.separator |
            span Taipei, Taiwan

        hr

        box(title="Work Experiences")
          items
            item(title="Senior Full-Stack Web Developer", meta="AmazingTalker | 2018 - Present")
              ul
                li Promote team technical skills
                li Accelerate team development and increase production value
                li Greatly optimize product execution performance
                li Optimize server architecture
                li Introduce Code Review
                li Introduce Docker
            item(title="Senior Full-Stack Web Developer", meta="UniSharp | 2016 - 2018")
              ul
                li Promote team technical skills
                li Accelerate team development and increase production value
                li Introduce Test Driven development
                li Introduce SCSS
                li Introduce Vue.js + Nuxt.js
                li Introduce Single Page Application
            item(title="Full-Stack Web Developer", meta="Bamboocat | 2014 - 2016")
              ul
                li Promote team technical skills
                li Accelerate team development and increase production value
                li Introduce modern development technology
                li Introduce SCSS
                li Introduce Laravel
                li Introduce Test Driven development
            item(title="Freelancer", meta="2008 - 2014")

        hr

        box(title="Skills")
          items.columns.is-multiline
            item.column.is-6-tablet.is-3-desktop(title="Frontend")
              ul
                li Vue.js + Nuxt.js
                li Jest
                li SCSS & Stylus
                li Bootstrap & Bulma
            item.column.is-6-tablet.is-3-desktop(title="Backend")
              ul
                li PHP + Laravel
                li PHPUnit
                li Ruby + Rails
                li Node.js + Socket.io
            item.column.is-6-tablet.is-3-desktop(title="Engineering")
              ul
                li SOLID
                li Design Pattern
                li TDD & Unit Test
                li Beautiful Code & Clean Code
            item.column.is-6-tablet.is-3-desktop(title="Environments")
              ul
                li Mac & Ubuntu
                li Command Line
                li Tmux + Vim
                li Docker

        hr

        box(title="Presentations")
          items
            item(
              title="Laravel Conf Taiwan 2019",
              meta="PHP / Laravel Puzzlers",
              link="https://github.com/storyn26383/php-laravel-puzzlers-2019")
              .columns.is-multiline
                .column.is-6: youtube(v="RT4F20YX7tQ")
                .column.is-6: slideshare(code="4Q1trcAtZ0cBzw")
            item(
              title="Laravel Conf Taiwan 2018",
              meta="Building a Chatbot with Botman",
              link="https://gitlab.com/laravelconftw/chatbot")
              .columns.is-multiline
                .column.is-6: youtube(v="6H4SLkbBKL0")
                .column.is-6: slideshare(code="8YC61Lawe2Ubqz")

        hr

        box(title="Portfolio")
          items.columns.is-multiline
            item.column.is-6(title="Clock in Vue.js", link="https://codepen.io/storyn26383/pen/veGzbK")
              codepen(pen="veGzbK")
            item.column.is-6(title="3D Cube in pure CSS", link="https://codepen.io/storyn26383/pen/zLVZYp")
              codepen(pen="zLVZYp")
            item.column.is-6(title="UniSharp Logo in pure CSS", link="https://codepen.io/storyn26383/pen/awpVJp")
              codepen(pen="awpVJp")
            item.column.is-6(title="Flex Dice", link="https://codepen.io/storyn26383/pen/WgjLpg")
              codepen(pen="WgjLpg")
            item.column.is-12(title="JavaScript Helpers with Babel Plugin", link="https://github.com/UniSharp/helpers.js")
              p Extend the JavaScript Object to speed up development.
              p
                | But since
                code Object
                | is the source of all objects, I could not directly extend
                code Object
                | . Therefore, I wrote
                code Babel Plugin
                | to solve this problem.
              p As below:
              pre(v-highlightjs): code.javascript.
                1.5.floor() // 1
                (1).upto(5, n => n) // [1, 2, 3, 4, 5]
                'Hello World'.limit(5) // 'Hello...'
                { a: 1, b: 2, c: 3 }.map(n => n ** 2) // { a: 1, b: 4, c: 9 }
            item.column.is-12(title="Vim Vue Plugin", link="https://github.com/storyn26383/vim-vue")
              p
                | The Vue plugins found on GitHub wrer very LAG, which would affect the efficiency and mood of development. So I wrote a
                strong high-performance
                | one.
              img.image(src="~/assets/images/vim-vue.png")
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import Box from '~/components/Box.vue'
  import Items from '~/components/Items.vue'
  import Item from '~/components/Item.vue'
  import Codepen from '~/components/Codepen.vue'
  import Slideshare from '~/components/Slideshare.vue'
  import Youtube from '~/components/Youtube.vue'

  @Component({
    components: { Box, Items, Item, Codepen, Slideshare, Youtube }
  })
  export default class PagesIndex extends Vue {
    //
  }
</script>

<style lang="stylus" scoped>
  a
    color inherit

  hr
    margin 2rem 0

  strong
    margin 0 .5rem

  p > code
    background-color transparent

  pre
    padding 0

  p:not(.link) + p
    margin-top -1rem

  .container
    max-width 1152px

  .separator
    padding 0 .5em

  .media
    align-items center

    .media-left
      margin 0
      margin-right 1rem

  .name
    .title
      margin-bottom 0

      span
        margin-right .5em

  .name, .about
    .media
      margin-bottom 1rem
</style>
