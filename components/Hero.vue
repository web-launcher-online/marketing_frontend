<template>
  <div class="c-hero">
    <div class="u-contain">
      <div class="u-flex">
        <div class="u-flex-grow">
          <slot name="content" />
        </div>
        <div class="u-hidden-mobile">
          <slot name="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.c-hero {
  position: relative;
  padding: 180px 80px;
  background-color: #FCFAF8;
  color: black;
}

@media (max-width: 1000px) {
  .c-hero {
    padding: 60px 30px;
  }
}


.c-hero h2 {
  font-weight: normal;
}

.c-hero img {
  width: 400px;
}
</style>