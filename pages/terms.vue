<template>
  <div>
    <MiniHero>
      <template v-slot:content>
        <h1>Terms of Use</h1>
        <h2>
          It is important to understand the terms by which you are able to use our service. This page details the terms we outline, usage of our service is considered acceptance of them.
        </h2>
      </template>
    </MiniHero>
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
