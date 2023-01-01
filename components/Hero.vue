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
    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
      <path d="M0.00,49.98 C261.57,160.35 434.81,37.98 500.00,49.98 L538.08,-37.98 L0.00,0.00 Z"></path>
    </svg>
  </div>
</template>

<style scoped>
.c-hero {
  position: relative;
  padding: 80px;
  background-color: black;
  color: white;
}

.c-hero h2 {
  font-weight: normal;
  font-size: 1.2rem;
}

.c-hero img {
  width: 400px;
}

.c-hero svg {
  position: absolute;
  right: 0;
  left: 0;
  height: 200px !important;
  width: 100%;
  bottom: 0;
  fill: black;
  margin-bottom: -200px;

}
</style>