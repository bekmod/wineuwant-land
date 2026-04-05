<script>
  import RootsBG from '$lib/assets/roots_bg.avif';
  import Canada from '$lib/assets/canada.svg';
</script>

<section class="bg-center bg-cover" style="background-image: url({RootsBG})">
  <div class="container mx-auto px-8 py-40">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-3xl text-burgundy-500 mb-6">
          Our <span class="font-bold">Roots</span>
        </h2>
        <p class="mb-4 text-menu-grey-500">
          <span class="font-bold">Paula</span> has lived and worked across Europe,
          South America, and Canada, always curious, always pushing forward, and
          always holding onto the hope and the dream of combining her greatest passion
          for wine with her love of people and the art of hospitality.
        </p>
        <p>
          Through every challenge and every new culture, she never let go.
          <span class="font-bold text-logo-grey-300">WineUWant</span> is that dream,
          realized. A place where passion meets purpose, and where every recommendation
          carries a little piece of the journey that brought her here.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-burgundy-300">
  <div class="container mx-auto px-8 py-24">
    <div
      class="flex bg-white rounded-xl align-center justify-between px-16 py-10 gap-16"
    >
      <img src={Canada} alt="Canada" class="max-w-36" />
      <p class="h-auto my-auto text-burgundy-300">
        WineUWant is proudly <span class="font-bold">Canadian</span>. We are
        committed to supporting local winemakers, growing wine tourism in the
        Niagara Region, and championing the businesses that make this ecosystem
        thrive.
      </p>
    </div>
  </div>
</section>
