<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let showModal = $state(false);

  onMount(() => {
    const consent = localStorage.getItem('wineuwant_cookie_consent');
    if (!consent) {
      showModal = true;
    }
  });

  function accept() {
    localStorage.setItem('wineuwant_cookie_consent', 'accepted');
    showModal = false;
  }

  function decline() {
    localStorage.setItem('wineuwant_cookie_consent', 'declined');
    showModal = false;
  }
</script>

{#if showModal}
  <div
    class="fixed bottom-0 left-0 w-full z-100 px-4 py-6 md:p-8 flex justify-center pointer-events-none"
    in:fly={{ y: 50, duration: 600, delay: 1000 }}
    out:fly={{ y: 50, duration: 600 }}
  >
    <div
      class="max-w-5xl bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] rounded-3xl p-6 md:p-8 border border-hero-gray-bg-400 flex flex-col md:flex-row items-center gap-6 justify-between pointer-events-auto"
    >
      <div class="flex flex-col flex-1 text-center md:text-left gap-2">
        <h3 class="text-xl font-semibold text-burgundy-500">
          We value your privacy
        </h3>
        <p class="text-logo-grey-400 text-sm">
          Right now we do not use cookies or collect any data. <br /> We only use
          local storage to improve page load times and performance.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <button
          onclick={decline}
          class="bg-burgundy-100/50 hover:bg-burgundy-100/80 hover:shadow-sm transition duration-300 ease-in-out text-white font-medium text-sm px-6 py-3 sm:py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase"
        >
          Decline
        </button>
        <button
          onclick={accept}
          class="bg-burgundy-400 hover:bg-burgundy-400/90 hover:shadow-sm transition duration-300 ease-in-out text-white font-medium text-sm px-6 py-3 sm:py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase"
        >
          Accept All
        </button>
      </div>
    </div>
  </div>
{/if}
