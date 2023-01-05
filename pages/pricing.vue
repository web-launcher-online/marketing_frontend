<template>
  <div>
    <Layout-MiniHero>
      <template v-slot:content>
        <h1>Pricing</h1>
        <h2>
          You can use our service for free but if you really like us, why not subscribe to support our future development and unlock some special features.
        </h2>
      </template>
    </Layout-MiniHero>
  </div>
</template>

<script setup lang="ts">
const title = "Pricing | weblauncher.online";
const description = "Learn more about our pricing to get even more out of our service";

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
</script>
