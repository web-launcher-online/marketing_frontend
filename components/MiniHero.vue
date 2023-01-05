<template>
  <div class="c-hero">
    <div class="u-contain">
      <div class="u-flex">
        <div class="u-flex-grow">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.c-hero {
  position: relative;
  padding: 80px 80px;
  background-color: #fcfaf8;
  border: 1px solid #F4F3F2;
  border-left: 0;
  border-right: 0;
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
</style>