<script>
  import Logo from '$lib/Logo.svelte';
  import FlowerBG from '$lib/assets/bg-flower.svg';
</script>

<footer class="z-1 overflow-x-clip">
  <div
    class="container relative flex flex-col justify-between items-center mx-auto px-4 py-8"
  >
    <img
      src={FlowerBG}
      alt=""
      class="absolute -top-56 -right-92 w-156 -z-10 pointer-events-none opacity-7"
    />
    <img
      src={FlowerBG}
      alt=""
      class="absolute -top-56 -left-92 w-156 -z-10 pointer-events-none opacity-7"
    />

    <Logo />

    <p class="text-center text-3xl text-burgundy-500 mt-6 mb-20">
      World-Class Wines. One Breathtaking Region.
      <br />
      Endless ways to experience it.
    </p>

    <div class="flex gap-4 justify-center mb-20">
      <button
        class="bg-burgundy-400 hover:bg-burgundy-400/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-xs px-6 py-4 rounded-full min-w-56 cursor-pointer"
        >WINE RECOMMENDATIONS</button
      >
      <button
        class="bg-burgundy-300 hover:bg-burgundy-300/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-xs px-6 py-4 rounded-full min-w-56 cursor-pointer"
        >WINE EXPERIENCES</button
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 w-full">
      <p class="text-xs text-burgundy-500 font-medium">
        <span class="font-semibold">WINEUWANT.COM</span> | JOY AND LIFE GO BEYOND THE GLASS
      </p>
      <div class="text-xs flex gap-8 justify-end font-medium text-burgundy-400">
        <a
          href="/about-us"
          class="hover:text-burgundy-300 transition duration-300 ease-in-out">ABOUT</a
        >
        <a
          href="/contact-us"
          class="hover:text-burgundy-300 transition duration-300 ease-in-out">CONTACT</a
        >
        <a
          href="/privacy"
          class="hover:text-burgundy-300 transition duration-300 ease-in-out">PRIVACY</a
        >
        <a
          href="/cookies"
          class="hover:text-burgundy-300 transition duration-300 ease-in-out">COOKIES</a
        >
        <a href="/terms" class="hover:text-burgundy-300">TERMS</a>
      </div>
    </div>
  </div>
</footer>
