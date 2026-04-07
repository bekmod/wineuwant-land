<script>
  import Footer from '$lib/Footer.svelte';
  import NavBar from '$lib/NavBar.svelte';
  import Roots from '$lib/Roots.svelte';
  import Reveal from '$lib/Reveal.svelte';
</script>

<NavBar />

<svelte:head>
  <title>Cookies | WineUWant</title>
</svelte:head>

<section>
  <div class="container mx-auto py-24 px-8">
    <Reveal y={40} duration={800}>
      <h2 class="text-center text-3xl text-burgundy-400 mb-12">
        Cookies & Local Storage Policy
      </h2>

      <div
        class="max-w-3xl mx-auto text-logo-grey-400 space-y-6 leading-relaxed text-center"
      >
        <p>
          This policy explains how WineUWant uses local storage and cookies on
          our landing page. We are committed to transparency regarding the data
          stored on your device.
        </p>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2">
            1. No Tracking Cookies
          </h3>
          <p>
            At this stage, WineUWant does <strong>not</strong> use tracking cookies,
            analytics cookies, or third-party marketing cookies to track your behavior
            across the internet. Our website is primarily informational.
          </p>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2">
            2. How We Use Local Storage
          </h3>
          <p>
            Instead of traditional cookies, we use your browser's built-in <strong
              >Local Storage</strong
            >. We strictly store essential information required for the website
            to function properly and to improve your experience.
          </p>
          <ul
            class="list-disc list-inside leading-loose mt-3 text-left inline-block"
          >
            <li>
              <strong>Age Verification & Consent:</strong> We store a simple value
              indicating that you have confirmed you are of legal drinking age and
              have accepted our policies. This prevents the consent modal from reappearing
              every time you navigate to a different page.
            </li>
          </ul>
        </section>

        <section>
          <h3 class="text-xl font-semibold text-burgundy-500 mb-2">
            3. Managing Your Preferences
          </h3>
          <p>
            You can clear your local storage at any time by clearing your
            browser's site data or history. Please note that if you clear your
            browser data, you will be prompted to confirm your age and consent
            again the next time you visit WineUWant.
          </p>
        </section>
      </div>
    </Reveal>
  </div>
</section>

<Footer />
