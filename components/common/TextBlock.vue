<template>
  <div class="c-textBlock u-contain">
    <slot />
  </div>
</template>

<style scoped>
.c-textBlock {
  background-color: #FCFAF8;
  border: 1px solid #F4F3F2;
  padding: 50px 50px;
  border-radius: 10px;
  margin: 30px auto;
  margin-top: 0;
  max-width: calc(100% - 40px);
}

@media (max-width: 800px) {
  .c-textBlock {
    padding: 30px;
  }
}
</style>