<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html {
  font-family: "Quicksand", "sans-serif";
  font-size: 18px;
  background-color: white;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.u-contain {
  position: relative;
  max-width: 1000px;
  z-index: 10;
}

.u-flex {
  display: flex;
  align-items: center;
}

.u-flex-grow {
  flex-grow: 1;
}
</style>