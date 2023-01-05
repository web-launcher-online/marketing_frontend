<template>
  <div>
    <Layout-MiniHero>
      <template v-slot:content>
        <h1>Privacy Policy</h1>
        <h2>
          We are committed to protecting your privacy, being transparent about
          what information we collect, and what we use it for.
        </h2>
      </template>
    </Layout-MiniHero>

    <Common-InfoBlock
      title="Consent"
      message="By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    />

    <Common-TextBlock>
      <p>
        If you have any questions or comments about our privacy policy, feel
        free to get in touch by emailing us at
        <a href="mailto:help@weblauncher.online">help@weblauncher.online</a>
      </p>
      <p>This policy was last updated in January 2023.</p>
    </Common-TextBlock>

    <Common-InfoBlock
      title="Analytics"
      message="Analytics anonymously show us what features are used on our website and how they perform."
    />

    <Common-TextBlock>
      <p>
        We don't use any third party tracking software like Google Analytics or that of any other third party.
      </p>
      <br>
      <p>
        We capture some basic analytics when you use our website, to do this we
        use internally developed software called
        <a
          href="https://www.micro-stat.com?ref=weblauncher.online"
          target="_blank"
          >micro-stat</a
        >
        to collect anonymous information that tells us which features are used
        and how they are performing so that we can focus our development where
        it matters.
      </p>
      <br>
      <p>
        Analytics that we collect while you use our website are not traded, shared or sold to any third party and all analytics are anonymous - meaning they cannot be linked to an individual. We keep analytics data for a period of 30 days, it is then deleted.
      </p>
      <br>
      <p>For example, we might count the number of times a particular app block is added to pages so that we can see which ones are most used and would benefit from further development. Or we might record how long it takes for our web pages to load so we can improve their performance over time.</p>
    </Common-TextBlock>

    <Common-InfoBlock
      title="Advertising"
      message="We are staunchly against incorporating third party advertisements within our service."
    />

    <Common-TextBlock>
      <p>We do not use any advertising frameworks or tools on weblauncher.online, nor do we show any advertisements on any of our pages.</p>
      <p>We don't sell space on our website to any third party, nor do we trade information that we have collected as part of delivering our service.</p>
    </Common-TextBlock>

    <Common-InfoBlock
      title="What information do we collect?"
      message="It is necessary to collect some information to provide our service, this is what we collect and why."
    />

    <Common-TextBlock>
      <p>We collect information at various points when you use our service so that we can provide you with the customised pages you have created, what information we collect depends on which services you use.</p>
      <br>
      <p>Should you choose to create an account or sign in, we collect an email address from you so that you can use it to sign in again in future.</p>
      <br>
      <p>Should you choose to utilise certain app blocks like todo lists and notes, any information entered is stored on your device or on our servers so that it can be loaded again in future. We recommend against storing any sensitive personal information in the app blocks.</p>
      <br>
      <p>We don't store technical related identifiers like IP Addresses, however we do store your entered locations to provide the clock and weather functionalities if you select them on your pages.</p>
    </Common-TextBlock>

    <Common-InfoBlock
      title="Our usage of Cookies and Storage"
      message="Cookies are a fundamental part of how the web works, this is how we use cookies and storage on your machine."
    />

    <Common-TextBlock>
      <p>If you choose to sign in or create an account we create a cookie on your device so that we can provide the personalised experience you expect and so we can remember that you are signed in.</p>
      <br>
      <p>Should you choose to use our service without signing into an account, your personalised start page configuration and data is stored in your browsers local storage, this data never leaves your device unless you choose to sign in and sync your pages across your other devices in which case we store it in our databases instead.</p>
      <br>
      <p>When you delete your account, a page or an app block; we delete any information provided within it, it is not retained once you stop using it.</p>
    </Common-TextBlock>

    <Common-InfoBlock
      title="GDPR Data Protection Rights"
      message="We comply with the rules relating to GDPR, here are some of your key rights."
    />

    <Common-TextBlock>
      <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
      <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
      <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
      <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
      <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
      <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
    </Common-TextBlock>
  </div>
</template>

<script setup lang="ts">
const title = "Privacy Policy | weblauncher.online";
const description = "Learn what information we collect and how we use it.";

useHead({
  title: title,
  meta: [{ name: "description", content: description }],
});
</script>
