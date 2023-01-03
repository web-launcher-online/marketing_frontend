<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Patua+One&family=Roboto&display=swap');

html {
  font-family: "Roboto", "sans-serif";
  font-size: 18px;
  background-color: white;
}

@media (max-width: 1250px) {
  html {
    font-size: 16px;
  }
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

@media (max-width: 800px) {
  h1 {
    font-size: 3rem;
  }
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 25px;
}

h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Patua One';
}

h4 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

h5 {
  font-size: 1rem;
}

p {
  line-height: 1.75rem;
  margin-bottom: 5px;
}

button {
  font-family: 'Roboto', 'sans-serif';
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 15px 30px;
  border-radius: 5px;
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

@media (max-width: 1000px) {
  .u-hidden-mobile {
    display: none;
  }
}

</style>