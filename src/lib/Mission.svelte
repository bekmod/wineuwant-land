<script>
  import Reveal from '$lib/Reveal.svelte';
  import MissionBg from '$lib/assets/mission-bg.avif';
</script>

<section class=" bg-white relative z-10 p-0">
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16 2xl:container 2xl:mx-auto"
  >
    <!-- Left Column: Mission Image -->
    <div class="col-span-1 md:col-span-2">
      <Reveal delay={0} class="h-full w-full">
        <div
          class="h-full -translate-x-[10%] bg-center bg-cover bg-no-repeat w-[110%] min-h-[300px]"
          style="background-image: url({MissionBg});"
        ></div>
      </Reveal>
    </div>

    <!-- Right column: Mission Copy -->
    <div class="flex flex-col justify-center py-24 md:py-24 px-8">
      <Reveal delay={200}>
        <h2 class="text-3xl text-burgundy-400 mb-6 text-center md:text-left">
          Our
          <span class="font-bold">Mission</span>
        </h2>

        <p class="text-logo-grey-400 text-center md:text-left">
          Niagara is one of the world’s most stunning wine regions, and one of
          its best-kept secrets. Nestled between two great lakes, just moments
          from the US border, its vineyards produce world-class wines that are
          finally earning the global recognition they deserve.
          <br /><br />
          Whether you’re visiting from across the street or across the world, WineUWant
          is your personal guide to discovering the wines, wineries, and experiences
          that make this region truly unforgettable.
        </p>
      </Reveal>
    </div>
  </div>
</section>
