<template>
  <div>
    <Layout-MiniHero>
      <template v-slot:content>
        <h1>Business</h1>
        <h2>
          Your staff can not only benefit from creating custom start pages, but you can add powerful business tools, from basic branding all the way to a self managed news portal.
        </h2>
      </template>
    </Layout-MiniHero>
  </div>
</template>

<script setup lang="ts">
const title = "Terms of Use | weblauncher.online";
const description = "Read our terms of use documentation";

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
</script>
