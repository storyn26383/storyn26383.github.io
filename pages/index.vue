<template lang="pug">
  .index-page
    .section
      .container
        box.name
          .media
            avatar.media-left.is-hidden-desktop(s)
            .media-content
              h1.title.is-2
                span.is-uppercase.has-text-primary.has-text-weight-bold Sasaya
                small.position.subtitle.is-4.is-block-touch Full-Stack Web Developer

        box.about
          .media
            avatar.media-left.is-hidden-touch
            .media-content
              p Over 10 years of experience as a Full-Stack engineer about web development.
              p Proficiency in PHP, Laravel, JavaScript, Vue, Ruby, CSS, Vim.
              p Team work and team management experience.
              p Write plugins to speed up development, such as Babel plugin, VIM package.
              p Let company's Slack robot have the function of switching iron gates for laziness of daily life.
        box.social-links
          ul
            li.is-inline-desktop: a(href="https://github.com/storyn26383", target="_blank")
              fa.icon(:icon="['fab', 'github']", size="2x")
              | storyn26383
            li.is-inline-desktop: a(href="mailto:sasaya@percussion.life")
              fa.icon(:icon="['fas', 'envelope-open']", size="2x")
              | sasaya@percussion.life
            li.is-inline-desktop: a(href="tel:+852-8193-3455")
              fa.icon(:icon="['fas', 'mobile-alt']", size="2x")
              | +852-8193-3455

        hr

        box(title="Work Experiences")
          items
            item(title="Senior Full-Stack Web Developer", meta="AmazingTalker | 2018 - Present")
              ul
                li Enhance team technical skills
                li Facilitate team development and increase production value
                li Greatly optimize product performance
                li Optimize server architecture
                li Introduce and implement Code Review
                li Introduce and implement Docker
            item(title="Senior Full-Stack Web Developer", meta="UniSharp | 2016 - 2018")
              ul
                li Enhance team technical skills
                li Facilitate team development and increase production value
                li Introduce and implement Test Driven Development
                li Introduce and implement SCSS
                li Introduce and implement Vue.js + Nuxt.js
                li Introduce and implement Single Page Application
            item(title="Full-Stack Web Developer", meta="Bamboocat | 2014 - 2016")
              ul
                li Enhance team technical skills
                li Facilitate team development and increase production value
                li Introduce and implement modern development technology
                li Introduce and implement SCSS
                li Introduce and implement Laravel
                li Introduce and implement Test Driven Development
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

        box.portfolio(title="Portfolio")
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
                | Since
                code Object
                | is the source of all objects, it cannot be extended directly
                code Object
                | . Therefore, I write a
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
                | The Vim Vue plugins found on GitHub were very LAG, which would affect the development efficiency and personal mood. So I wrote a
                strong high-performance
                | one.
              figure
                picture.image
                  source(data-srcset="~/assets/images/vim-vue.png?webp", type="image/webp")
                  source(data-srcset="~/assets/images/vim-vue.png", type="image/png")
                  img.lazyload(data-src="~/assets/images/vim-vue.png")
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import Box from '~/components/Box.vue'
  import Items from '~/components/Items.vue'
  import Item from '~/components/Item.vue'
  import Codepen from '~/components/Codepen.vue'
  import Slideshare from '~/components/Slideshare.vue'
  import Youtube from '~/components/Youtube.vue'
  import Avatar from '~/components/Avatar.vue'

  @Component({
    components: { Box, Items, Item, Codepen, Slideshare, Youtube, Avatar }
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

  .social-links
    ul
      list-style none
      margin 0
      padding 0

      li
        margin-right 1em

    .icon
      width 1em

  .portfolio
    figure
      margin 0 !important
</style>
