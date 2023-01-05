<template>
  <div>
    <Layout-Hero>
      <template v-slot:content>
        <h1>Build your own custom browser start page</h1>
        <h2>
          Sync your pages across all of your devices and enhance productivity
          with focus modes.
        </h2>
        <button type="button">Coming Soon...</button>
      </template>

      <template v-slot:image>
        <img width="400" src="/images/browser-window.webp" />
      </template>
    </Layout-Hero>

    <Common-InfoBlock
      title="Choose a layout, or build your own"
      message="Want to get something up and running fast? Use one of our layouts and tweak it to your hearts content. Alternatively build your own layout from scratch just how you like it."
    />

    <Layout />

    <Common-InfoBlock
      title="Add the blocks you need"
      message="We offer a wide variety of tools to make your start pages your own, keep it really clean and simple or build a productivity powerhouse."
    />

    <Sections-AppBlocks />

    <Common-InfoBlock
      title="Your privacy is protected"
      message="We protect your privacy because your personal information is none of our business, find out more in our privacy policy."
    />

    <div class="u-center">
      <nuxt-link class="u-button" to="/privacy">
        Read the Privacy Policy...
      </nuxt-link>
    </div>

    <Sections-Privacy />

    <Common-InfoBlock
      title="For you, your team and your business!"
      message="We provide the best experience for many different use cases, from simple start pages just for you that enhance your personal web experience, all the way to a fully featured intranet for your business to keep everybody in sync.."
    />

    <div class="u-center">
      <nuxt-link class="u-button" to="/business">
        Learn about Business Plans
      </nuxt-link>
    </div>

    <Layout />

    <Common-Box>
      <h3>Build your own custom start page today</h3>
      <p>
        Ditch the boring default browser start pages and build your perfect start page
        experience for free.
      </p>
      <p>
        Create a productivty powerhouse that helps you to get things done, or create a space of zen to start every session the right way.
      </p>

      <p>PS: You don't even need to register an account to build your page!</p>
      <button type="button">Get Started</button>
    </Common-Box>
  </div>
</template>

<script setup lang="ts">
const title = "Build your own custom start page | weblauncher.online";
const description = "Build your own custom browser start page and sync it across all of your devices";

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
</script>
