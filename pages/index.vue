<template>
  <div>
    <Hero>
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
    </Hero>

    <InfoBlock
      title="Choose a layout, or build your own"
      message="Want to get something up and running fast? Use one of our layouts and tweak it to your hearts content. Alternatively build your own layout from scratch just how you like it."
    />

    <Layout />

    <InfoBlock
      title="Add the blocks you need"
      message="We offer a wide variety of tools to make your start pages your own, keep it really clean and simple or build a productivity powerhouse."
    />

    <FeatureGallery />

    <InfoBlock
      title="Your privacy is protected"
      message="We protect your privacy because your personal information is none of our business, find out more in our privacy policy."
    />

    <Privacy />

    <InfoBlock
      title="The perfect way to start every browsing session"
      message="No longer make do with a sub par default experience that is inconsistent across all of your devices, start today to build a beautiful and personal experience so you can start every journey in the best way possible."
    />

    <Box>
      <h3>Build your own custom start page today</h3>
      <p>
        Ditch the boring default browser start pages and build your own
        experience for free.
      </p>
      <p>
        Create your own serenity online or build a productivity powerhouse and
        push yourself to the next level
      </p>

      <p>You don't need to setup an account to try it out!</p>
      <button type="button">Get Started</button>
    </Box>
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
