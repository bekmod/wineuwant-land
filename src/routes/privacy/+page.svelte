<script>
  import Footer from '$lib/Footer.svelte';
  import NavBar from '$lib/NavBar.svelte';
  import Roots from '$lib/Roots.svelte';
  import Reveal from '$lib/Reveal.svelte';
</script>

<NavBar />

<svelte:head>
  <title>Privacy | WineUWant</title>
</svelte:head>

<section>
  <div class="container mx-auto py-24 px-8">
    <Reveal y={40} duration={800}>
      <h2 class="text-center text-3xl text-burgundy-400 mb-12">
        Privacy Policy
      </h2>

      <div
        class="max-w-3xl mx-auto text-logo-grey-400 space-y-6 leading-relaxed"
      >
        <p class="text-center">
          At WineUWant, we are committed to protecting your privacy. This
          Privacy Policy outlines our practices regarding the information we
          collect and how we use it when you visit our landing page.
        </p>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2 text-center">
            1. Information We Collect
          </h3>
          <p class="text-center">
            Currently, our website is a simple landing page. We do not actively
            collect automated personal data through tracking analytics. We only
            collect information that you voluntarily provide to us (such as your
            email address, if you choose to contact us to be notified when our
            platform launches).
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2 text-center">
            2. Cookies and Local Storage
          </h3>
          <p class="text-center">
            We do not use tracking cookies or third-party advertising cookies to
            monitor your behavior. We exclusively use your browser's <strong
              >Local Storage</strong
            > strictly to remember your age confirmation and consent choices, which
            ensures you are not repeatedly prompted when navigating our site.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2 text-center">
            3. Age Restriction
          </h3>
          <p class="text-center">
            WineUWant is strictly intended for individuals of legal drinking age
            in their respective province or territory of residence (18+ in
            Alberta, Manitoba, and Quebec; 19+ elsewhere in Canada). We do not
            intentionally collect any information from individuals under the
            legal drinking age.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2 text-center">
            4. Changes to This Policy
          </h3>
          <p class="text-center">
            As we develop our platform and introduce new features, we may update
            this Privacy Policy to reflect those operational changes. Any
            updates will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2 text-center">
            5. Contact Us
          </h3>
          <p class="text-center">
            If you have any questions or concerns about this Privacy Policy or
            how your data is handled, please reach out to us via our <a
              href="/contact-us"
              class="text-burgundy-400 hover:text-burgundy-500 hover:underline transition-colors font-medium"
              >Contact page</a
            >.
          </p>
        </section>
      </div>
    </Reveal>
  </div>
</section>

<Footer />
