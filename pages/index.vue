<template>
  <div>
    <Hero>
      <template v-slot:content>
        <h1>Build your own custom browser start page</h1>
          <h2>Sync your pages across all of your devices and enhance productivity with focus modes.</h2>
          <button type="button">Coming Soon...</button>
      </template>

      <template v-slot:image>
        <img width="400" src="/images/browser-window.webp">
      </template>
    </Hero>

    <!-- <InfoBlock
        title="Your personal starting point for every web journey"
        message="Test" /> -->

    <InfoBlock
        title="Choose a layout, or build your own"
        message="Want to get something up and running fast? Use one of our layouts and tweak it to your hearts content. Alternatively build your own layout from scratch just how you like it." />~

    <InfoBlock
      title="Add the blocks you need"
      message="We offer a wide variety of tools to make your start pages your own, keep it really clean and simple or build a productivity powerhouse." />

      <InfoBlock
        title="Your privacy is protected"
        message="We don't harvest or trade your data. In fact you don't even need to create an account; keep your data local to your device, or login to sync across all your devices." />
  </div>
</template>
