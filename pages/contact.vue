<template>
  <div>
    <Layout-MiniHero>
      <template v-slot:content>
        <h1>Contact</h1>
        <h2>
          If you have any questions or comments for us, please drop us a line using the form below.
        </h2>
      </template>
    </Layout-MiniHero>
  </div>
</template>

<script setup lang="ts">
const title = "Contact | weblauncher.online";
const description = "Learn how to contact us with questions and comments";

useHead({
  title: title,
  meta: [
    { name: 'description', content: description }
  ]
})
</script>
