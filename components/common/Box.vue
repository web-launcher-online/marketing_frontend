<template>
  <div class="c-box u-contain">
    <slot />
  </div>
</template>

<style scoped>
.c-box {
  background-color: #FCFAF8;
  border: 1px solid #F4F3F2;
  padding: 60px 60px;
  border-radius: 10px;
  margin: 30px auto;
  max-width: calc(100% - 40px);
}
</style>