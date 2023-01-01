<template>
  <div>
    <Hero>
      <template v-slot:content>
        <h1>Build your own browser start page</h1>
          <h2>Sync your pages across all browsers and devices.</h2>
          <h2>Enhance your productivity with focus modes</h2>
          <h2>A beautiful place to start every session </h2>
          <button type="button">Build your own</button>
      </template>

      <template v-slot:image>
        <img width="400" src="/devices.png">
      </template>
    </Hero>
  </div>
</template>
