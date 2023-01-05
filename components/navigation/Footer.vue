<template>
  <div class="c-footer">
    <div class="c-footer-inner">
      <a href="/">
        <img class="c-footer-logo" src="/images/logo.png" width="217" height="60" alt="Site Logo">
      </a>

      <div class="c-footer-linksWrapper">
        <div class="c-footer-category">
          <h5>
            <span>Product</span>
          </h5>

          <nuxt-link to="/">
            Homepage
          </nuxt-link>
          <nuxt-link to="/pricing">
            Pricing
          </nuxt-link>
        </div>

        <div class="c-footer-category">
          <h5>
            <span>Dashboard</span>
          </h5>

          <a href="https://go.weblauncher.online/register">Get Started</a>
          <a href="https://go.weblauncher.online/signin">Sign In</a>
        </div>

        <div class="c-footer-category">
          <h5>
            <span>Company</span>
          </h5>

          <a href="https://github.com/web-launcher-online" target="_blank">Github</a>
        </div>

        <div class="c-footer-category">
          <h5>
            <span>Support</span>
          </h5>

          <nuxt-link to="/contact">
            Contact
          </nuxt-link>

          <nuxt-link to="/privacy">
            Privacy Policy
          </nuxt-link>
          <nuxt-link to="/terms">
            Terms of Use
          </nuxt-link>
        </div>

        <div class="c-footer-category">
          <h5>
            <span>Attribution</span>
          </h5>

          <a href="https://www.flaticon.com/free-icons/sidebar" title="sidebar icons">Icons created by Kirill Kazachek</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-footer {
  position: relative;
  padding: 10px 20px;
  margin-top: 80px;
  background-color: #FCFAF8;
  border-top: 1px solid #F4F3F2;
}

.c-footer img {
  margin-bottom: 20px;
  height: 60px;
}

.c-footer-inner {
  min-height: 400px;
  width: 1200px;
  padding: 40px 10px;
  max-width: 90vw;
  margin: 0 auto;
}

.c-footer-linksWrapper {
  display: flex;
  flex-direction: row;
  padding: 40px 10px;
  border-top: 1px solid #F4F3F2;
  border-bottom: 1px solid #F4F3F2;
  max-width: 90vw;
}

.c-footer-category {
   flex: 1 1;
}

@media (max-width: 500px) {
  .c-footer-linksWrapper {
    flex-direction: column;
  }

  .c-footer-category {
   flex: 1 1;
   margin-bottom: 20px;
  }
}

.c-footer-category svg {
  margin-right: 5px;
}

.c-footer-category a, .c-footer-category button {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: black;
}

button {
  background-color: transparent;
  border: 0;
  color: white;
  font-size: 1rem;
  padding: 0;
  cursor: pointer;
}
</style>