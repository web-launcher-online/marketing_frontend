<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Patua+One&family=Roboto&display=swap');

html {
  font-family: "Roboto", "sans-serif";
  font-size: 18px;
  background-color: white;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: 'Patua One';
  font-size: 3.5rem;
  margin-bottom: 30px;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 25px;
}

button {
  font-family: 'Roboto', 'sans-serif';
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin: 15px 0;
}

.u-contain {
  position: relative;
  width: 1200px;
  max-width: 100%;
  z-index: 10;
  margin: 0 auto;
}

.u-flex {
  display: flex;
  align-items: center;
}

.u-flex-grow {
  flex-grow: 1;
  margin-right: 20px;
}
</style>