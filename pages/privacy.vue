<template>
  <div>
    <MiniHero>
      <template v-slot:content>
        <h1>Privacy Policy</h1>
        <h2>
          We are committed to protecting your privacy, being transparent about what information we collect, and what we use it for.
        </h2>
      </template>
    </MiniHero>
  </div>
</template>

<script setup lang="ts">
const title = "Privacy Policy | weblauncher.online";
const description = "Learn what information we collect and how we use it.";

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
</script>
