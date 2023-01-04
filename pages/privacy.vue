<template>
  <div>
    <MiniHero>
      <template v-slot:content>
        <h1>Privacy Policy</h1>
        <h2>
          We are committed to protecting your privacy, being transparent about
          what information we collect, and what we use it for.
        </h2>
      </template>
    </MiniHero>

    <InfoBlock
      title="Consent"
      message="By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    />

    <TextBlock>
      <p>
        If you have any questions or comments about our privacy policy, feel
        free to get in touch by emailing us at
        <a href="mailto:help@weblauncher.online">help@weblauncher.online</a>
      </p>
      <p>This policy was last updated in January 2023.</p>
    </TextBlock>

    <InfoBlock
      title="Analytics"
      message="Here is how we use analytics to improve our product and your experience."
    />

    <TextBlock>
      <p>
        We don't use any third party tracking software like Google Analytics or
        any other third party.
      </p>
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
      <p>
        Any information that we do need to collect for the purposes of using our
        website is not traded or sold to any third party and when in relation to
        analytics is always anonymous (IE not linked back to you).
      </p>
    </TextBlock>

    <InfoBlock
      title="What information do we collect?"
      message="It is necesary to collect some information to provide our service, this is what we collect and why."
    />

    <TextBlock>
      <p>Coming Soon.</p>
    </TextBlock>

    <InfoBlock
      title="Our usage of Cookies"
      message="Cookies are a fundamental part of how the web works, these are the cookies we use to deliver our service to you."
    />

    <TextBlock>
      <p>Coming Soon.</p>
    </TextBlock>

    <InfoBlock
      title="GDPR Data Protection Rights"
      message="We comply with the rules relating to GDPR, if you want to exercise your rights, these are some ways we can help you."
    />

    <TextBlock>
      <p>Coming Soon.</p>
    </TextBlock>
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
