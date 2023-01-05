<template>
  <div class="c-privacy">
    <div class="c-privacy-block">
      <img src="/images/featureGallery/shopping-cart.png" alt="No Ads Icon">
      <h4>No Ads</h4>
      <p>We don't show ads to any of our users, we don't want them to track you across the web and they provide a terrible experience.</p>
      <p>If you like our product, consider donating to keep us alive.</p>
    </div>

    <div class="c-privacy-block">
      <img src="/images/featureGallery/visibility.png" alt="Internal Only Trackers Icon">
      <h4>No External Trackers</h4>
      <p>We don't use any external tracking technologies.</p>
      <p>We only use internally developed tech to track product usage anonymously so we know where to focus our development efforts.</p>
    </div>
    
    <div class="c-privacy-block">
      <img src="/images/featureGallery/group.png" alt="Optional Account Signup Icon">
      <h4>Optional Account Signup</h4>
      <p>Build your pages without giving any personal information or creating an account.</p>
      <p>Only create an account when you want to sync your pages across devices.</p>
    </div>
  </div>
</template>

<style scoped>
.c-privacy {
  display: flex;
  /* flex-direction: row-reverse; */
  justify-content: center;
  margin-bottom: 60px;
}

.c-privacy p {
  margin-bottom: 15px;
}

.c-privacy-block {
  margin: 15px;
  background-color: #FCFAF8;
  border: 1px solid #F4F3F2;
  padding: 50px 50px;
  min-height: 200px;
  width: 600px;
  text-align: center;
  border-radius: 10px;
}

.c-privacy-block img {
  width: 65px;
  margin-bottom: 15px;
}

@media (max-width: 900px) {
  .c-privacy {
    flex-direction: column;
  }

  .c-privacy-block {
    max-width: calc(100% - 40px);
    margin: 20px auto;
    
  }
}
</style>