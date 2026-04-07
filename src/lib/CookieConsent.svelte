<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

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
  <!-- Backdrop -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[140] bg-black/40 backdrop-blur-sm"
    in:fade={{ duration: 600, delay: 1000 }}
    out:fade={{ duration: 600 }}
  ></div>

  <!-- Modal -->
  <div
    class="fixed bottom-0 left-0 w-full z-[150] px-4 py-6 md:p-8 flex justify-center"
    in:fly={{ y: 50, duration: 600, delay: 1000 }}
    out:fly={{ y: 50, duration: 600 }}
  >
    <div
      class="w-full max-w-5xl bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] rounded-3xl p-6 md:p-8 border border-hero-gray-bg-400 flex flex-col md:flex-row items-center gap-6 justify-between"
    >
      <div class="flex flex-col flex-1 text-center md:text-left gap-2">
        <h3 class="text-xl font-semibold text-burgundy-500">
          Please Confirm Your Age and Privacy Settings
        </h3>
        <p class="text-logo-grey-400 text-sm">
          WineUWant Inc. is intended for individuals of legal drinking age in
          their province or territory of residence (18+ in Alberta, Manitoba,
          and Quebec; 19+ elsewhere in Canada). <br /> We do NOT sell or supply
          alcohol. <br /> We only use local storage to improve page load times and
          performance.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <button
          onclick={decline}
          class="bg-burgundy-100/50 hover:bg-burgundy-100/80 hover:shadow-sm transition duration-300 ease-in-out text-white font-medium text-sm px-6 py-4 sm:py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase"
        >
          Decline
        </button>
        <button
          onclick={accept}
          class="bg-burgundy-400 hover:bg-burgundy-400/90 hover:shadow-sm transition duration-300 ease-in-out text-white font-medium text-sm px-6 py-4 sm:py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase"
        >
          Confirm & Accept
        </button>
      </div>
    </div>
  </div>
{/if}
