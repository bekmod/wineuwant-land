<script lang="ts">
  import menuIcon from '$lib/assets/menu.svg';
  import Logo from '$lib/Logo.svelte';
  import { fade } from 'svelte/transition';

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<div
  class="container relative z-50 flex justify-between items-center mx-auto py-4 px-8"
>
  <button
    class="flex items-center justify-start my-auto gap-2 flex-1 cursor-pointer hover:opacity-70 transition-opacity"
    onclick={toggleMenu}
    aria-label="Toggle menu"
    aria-expanded={isMenuOpen}
  >
    {#if !isMenuOpen}
      <img src={menuIcon} alt="menu" />
    {:else}
      <svg
        class="w-6 h-6 text-menu-grey-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    {/if}
    <p class="h-full text-base font-medium text-menu-grey-400">
      {isMenuOpen ? 'CLOSE' : 'MENU'}
    </p>
  </button>

  <Logo />

  <div class="flex items-center justify-end flex-1 my-auto">
    <a
      href="/contact-us"
      onclick={closeMenu}
      aria-label="Contact us"
      class="group bg-white shadow-lg hover:shadow-xl cursor-pointer transition duration-300 ease-in-out h-16 w-16 rounded-full flex items-center justify-center text-menu-grey-400 hover:text-burgundy-500"
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</div>

{#if isMenuOpen}
  <div
    class="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center max-w-svh justify-center"
    transition:fade={{ duration: 300 }}
  >
    <nav class="flex flex-col gap-8 text-center">
      <a
        href="/"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >HOME</a
      >
      <a
        href="/about-us"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >ABOUT</a
      >
      <a
        href="/contact-us"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >CONTACT</a
      >
      <a
        href="/privacy"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >PRIVACY</a
      >
      <a
        href="/cookies"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >COOKIES</a
      >
      <a
        href="/terms"
        onclick={closeMenu}
        class="text-4xl md:text-5xl font-medium text-burgundy-400 hover:text-burgundy-300 transition duration-300 ease-in-out"
        >TERMS</a
      >
    </nav>
  </div>
{/if}
