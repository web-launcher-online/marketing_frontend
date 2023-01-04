<template>
  <div class="c-infoBlock">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Info Block'
    },
    message: {
      type: String,
      default: 'Sample Text'
    }
  }
}
</script>


<style scoped>
.c-infoBlock {
  width: 800px;
  max-width: 100%;
  padding: 60px 40px;;
  text-align: center;
  margin: 0 auto;
}
</style>