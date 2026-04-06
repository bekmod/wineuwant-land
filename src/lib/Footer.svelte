<script>
  import Reveal from '$lib/Reveal.svelte';
  import Logo from '$lib/Logo.svelte';
  import FlowerBG from '$lib/assets/bg-flower.svg';
</script>

<footer class="z-1 overflow-x-clip">
  <div
    class="container relative flex flex-col justify-between items-center mx-auto px-8 py-8"
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

    <Reveal delay={0}>
      <Logo />
    </Reveal>

    <Reveal delay={100}>
      <p class="text-center text-3xl text-burgundy-500 mt-6 mb-20">
        World-Class Wines. One Breathtaking Region.
        <br />
        Endless ways to experience it.
      </p>
    </Reveal>

    <Reveal delay={200} class="w-full max-w-lg mb-20">
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <button
          class="bg-burgundy-400 hover:bg-burgundy-400/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-sm px-6 py-4 rounded-full min-w-56 cursor-pointer"
          >WINE RECOMMENDATIONS</button
        >
        <button
          class="bg-burgundy-300 hover:bg-burgundy-300/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-sm px-6 py-4 rounded-full min-w-56 cursor-pointer"
          >WINE EXPERIENCES</button
        >
      </div>
    </Reveal>

    <Reveal delay={300} class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <p
          class="text-sm text-burgundy-500 font-medium text-center md:text-left"
        >
          <span class="font-semibold">WINEUWANT.COM</span> <br />JOY AND LIFE GO
          BEYOND THE GLASS
        </p>
        <div
          class="text-sm flex flex-col md:flex-row gap-8 justify-center items-center md:justify-end font-medium text-burgundy-400"
        >
          <a
            href="/about-us"
            class="hover:text-burgundy-300 transition duration-300 ease-in-out"
            >ABOUT</a
          >
          <a
            href="/contact-us"
            class="hover:text-burgundy-300 transition duration-300 ease-in-out"
            >CONTACT</a
          >
          <a
            href="/privacy"
            class="hover:text-burgundy-300 transition duration-300 ease-in-out"
            >PRIVACY</a
          >
          <a
            href="/cookies"
            class="hover:text-burgundy-300 transition duration-300 ease-in-out"
            >COOKIES</a
          >
          <a href="/terms" class="hover:text-burgundy-300">TERMS</a>
        </div>
      </div>
    </Reveal>
  </div>
</footer>
