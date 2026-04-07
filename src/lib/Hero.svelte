<script>
  import Reveal from '$lib/Reveal.svelte';
  import FlowerReveal from '$lib/FlowerReveal.svelte';
  import HeroBg from '$lib/assets/hero-bg.avif';
  import Glasses from '$lib/assets/glasses.webp';
  import HeroFlower from '$lib/assets/hero-flower.svg';
  import { isServicesModalOpen } from '$lib/modalStore';

  import NavBar from './NavBar.svelte';
</script>

<section class="relative z-50 bg-[#fcfcfc] overflow-x-clip">
  <div
    class="absolute inset-0 -z-20 opacity-20 bg-top bg-cover bg-no-repeat"
    style="background-image: url({HeroBg});"
  ></div>

  <NavBar />

  <div
    class="container grid grid-cols-1 md:grid-cols-2 justify-between align-center mx-auto px-0 md:px-8"
  >
    <div class="flex flex-col px-8 justify-center relative z-0">
      <FlowerReveal
        delay={500}
        class="absolute -top-48 -left-80 h-149 w-149 -z-10 pointer-events-none"
      >
        <img src={HeroFlower} alt="" class="w-full h-full" />
      </FlowerReveal>

      <div
        class="absolute top-0 left-0 -z-15 rounded-full bg-hero-gray-bg-500 h-128 w-lg blur-3xl opacity-75"
      ></div>
      <Reveal delay={100}>
        <h1
          class="text-burgundy-500 text-3xl text-center mt-16 md:mt-0 md:text-left mb-4 pl-0"
        >
          “The best wine is the one you can’t put it down because it fulfills
          your passion and touches your soul in an unspeakable way.”
        </h1>
        <p
          class="text-burgundy-400 font-medium text-center md:text-left mb-8 pl-0 m"
        >
          PAULA, FOUNDER OF WINEUWANT
        </p>
        <p class="text-burgundy-400 mb-8 text-center md:text-left">
          We are here to help find you the perfect wine recommendation, and your
          perfect winery, tasting, or event experience.
        </p>
        <div
          class="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            onclick={() => ($isServicesModalOpen = true)}
            class="bg-burgundy-400 hover:bg-burgundy-400/90 hover:shadow-sm hover:-translate-y-0.5 transition duration-300 ease-in-out text-white font-bold text-sm px-8 py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase block content-center"
            >WINE RECOMMENDATIONS</button
          >
          <button
            onclick={() => ($isServicesModalOpen = true)}
            class="bg-burgundy-300 hover:bg-burgundy-300/90 hover:shadow-sm hover:-translate-y-0.5 transition duration-300 ease-in-out text-white font-bold text-sm px-8 py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase block content-center"
            >WINE EXPERIENCES</button
          >
        </div>
      </Reveal>
    </div>

    <div class="relative h-144 w-full overflow-y-clip">
      <div
        class="absolute top-0 left-0 w-full h-[110%] bg-center bg-cover bg-no-repeat -scale-x-100 overflow-x-clip"
        style="background-image: url({Glasses});"
      ></div>
    </div>
  </div>
</section>
