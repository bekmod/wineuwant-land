<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { isServicesModalOpen } from '$lib/modalStore';

  function close() {
    $isServicesModalOpen = false;
  }
</script>

{#if $isServicesModalOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-150 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
    transition:fade={{ duration: 300 }}
    onclick={close}
  >
    <div
      class="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl border border-hero-gray-bg-400 text-center flex flex-col items-center"
      in:fly={{ y: 20, duration: 400, delay: 100 }}
      out:fly={{ y: 20, duration: 300 }}
      onclick={(e) => e.stopPropagation()}
    >
      <h3 class="text-3xl font-semibold text-burgundy-500 mb-4">Contact Us</h3>
      <p class="text-logo-grey-400 font-medium mb-8">
        Our Wine Recommendations and Wine Experiences are within the WineUWant
        platform. Be the first to know when we launch the platform by getting in
        touch with us!
      </p>

      <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button
          onclick={close}
          class="bg-hero-gray-bg-400/50 hover:bg-hero-gray-bg-400/70 hover:shadow-sm hover:-translate-y-0.5 transition duration-300 ease-in-out text-burgundy-500 font-bold text-sm px-8 py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase"
        >
          Close
        </button>
        <a
          href="/contact-us"
          onclick={close}
          class="bg-burgundy-400 hover:bg-burgundy-400/90 hover:shadow-sm hover:-translate-y-0.5 transition duration-300 ease-in-out text-white font-bold text-sm px-8 py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase block content-center"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
{/if}
