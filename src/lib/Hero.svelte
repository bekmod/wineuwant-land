<script>
  import HeroBg from '../assets/hero-bg.avif';
  import Glasses from '../assets/glasses.webp';
  import HeroFlower from '../assets/hero-flower.svg';

  import NavBar from './NavBar.svelte';
</script>

<section class="relative z-10 bg-[#fcfcfc]">
  <div
    class="absolute inset-0 -z-20 opacity-20 bg-top bg-cover bg-no-repeat"
    style="background-image: url({HeroBg});"
  ></div>

  <NavBar />

  <div
    class="container grid grid-cols-1 md:grid-cols-2 justify-between align-center mx-auto px-8"
  >
    <div class="flex flex-col px-8 justify-center relative z-0">
      <img
        src={HeroFlower}
        alt=""
        class="absolute -top-48 -left-80 h-149 w-149 -z-10 pointer-events-none"
      />

      <div
        class="absolute top-0 left-0 -z-15 rounded-full bg-hero-gray-bg-500 h-128 w-lg blur-3xl opacity-75"
      ></div>
      <h1 class="text-burgundy-500 text-3xl mb-4 pl-2">
        “The best wine is the one you can’t put it down because it fulfills your passion
        and touches your soul in an unspeakable way.”
      </h1>
      <p class="text-burgundy-400 font-medium mb-8 pl-2">PAULA, FOUNDER OF WINEUWANT</p>
      <p class="text-burgundy-400 mb-8 text-center">
        We are here to help find you the perfect wine recommendation, and your perfect
        winery, tasting, or event experience.
      </p>
      <div class="flex gap-4 justify-center">
        <button
          class="bg-burgundy-400 hover:bg-burgundy-400/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-xs px-6 py-4 rounded-full flex-1 cursor-pointer"
          >WINE RECOMMENDATIONS</button
        >
        <button
          class="bg-burgundy-300 hover:bg-burgundy-300/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-xs px-6 py-4 rounded-full flex-1 cursor-pointer"
          >WINE EXPERIENCES</button
        >
      </div>
    </div>

    <div class="relative h-144 w-full overflow-y-clip">
      <div
        class="absolute top-0 left-0 w-full h-[110%] bg-center bg-cover bg-no-repeat -scale-x-100"
        style="background-image: url({Glasses});"
      ></div>
    </div>
  </div>
</section>
