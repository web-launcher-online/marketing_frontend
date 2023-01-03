<template>
  <div class="c-hero">
    <div class="u-contain">
      <div class="u-flex">
        <div class="u-flex-grow">
          <slot name="content" />
        </div>
        <slot name="image" />
      </div>
    </div>
  </div>
</template>

<style>
.c-hero {
  position: relative;
  padding: 140px 80px;
  background-color: #FCFAF8;
  color: black;
}

.c-hero h2 {
  font-weight: normal;
}

.c-hero img {
  width: 400px;
}
</style>