<script>
  import PlanIcon1 from '$lib/assets/journey_icon_1.webp';
  import PlanIcon2 from '$lib/assets/journey_icon_2.webp';
  import PlanIcon3 from '$lib/assets/journey_icon_3.webp';

  import GrapeIcon from '$lib/assets/journey_grape.webp';

  import PlanImage1 from '$lib/assets/journey_image_1.avif';
  import PlanImage2 from '$lib/assets/journey_image_2.avif';
  import PlanImage3 from '$lib/assets/journey_image_3.webp';

  const plans = [
    {
      name: 'Fit',
      tag: 'THE PERFECT STARTING POINT',
      icon: PlanIcon1,
      image: PlanImage1,
      color: 'bg-burgundy-50',
      description_p1:
        "Not sure where to begin? That's exactly what we're here for. Tell us a little about your taste, budget, and occasion, and we'll do the rest!",
      description_p2: 'Take the Quiz',
      description_p3:
        "Answer a few quick questions about what you enjoy, what you're celebrating, and how much you'd like to spend. No wine knowledge needed, our guided quiz makes it easy and fun. Based on your answers, we'll hand-pick wine recommendations perfectly matched to your palate, whether it's for yourself or a gift for someone special.",
    },
    {
      name: 'Fit Plus',
      tag: 'FOR THOSE WHO WANT MORE THAN A GREAT BOTTLE',
      icon: PlanIcon2,
      image: PlanImage2,
      color: 'bg-burgundy-100',
      description_p1:
        'Great wine deserves great food, and an experience worth remembering. Book wine tastings, tours, and winery events, or reserve a table at a local restaurant handpicked for its food and wine pairing.',
      description_p2: '',
      description_p3:
        'Planning something special? We’ll help you find the perfect setting for birthdays, anniversaries, corporate gatherings, weddings, and bachelorette parties. Your next unforgettable moment starts here.',
    },
    {
      name: 'Fit Diamond',
      tag: 'YOUR PERSONAL WINDOW INTO NIAGARA’S WINE WORLD',
      icon: PlanIcon3,
      image: PlanImage3,
      color: 'bg-burgundy-200',
      description_p1:
        'Receive curated updates featuring new wine releases, private winery events, music nights, and seasonal festivals like the famous Icewine Festival and other seasonal events across the Niagara Region.',
      description_p2: '',
      description_p3:
        'You’ll also get exclusive access to unique experiences like Sake Workshops and food pairings hosted by Masaki Sushi in partnership with the Prince of Wales Hotel in Niagara-on-the-Lake.',
    },
  ];
</script>

<section
  class="bg-linear-to-b from-hero-gray-bg-400/65 to-transparent relative z-10 overflow-x-clip"
>
  <div class="container relative mx-auto px-8 py-24">
    <div
      class="absolute top-48 -right-48 bg-burgundy-500/10 h-96 w-96 blur-3xl -z-10"
    ></div>
    <div
      class="absolute top-48 -left-48 bg-burgundy-500/10 h-96 w-96 blur-3xl -z-10"
    ></div>

    <!-- Section Heading -->
    <div class="flex flex-col items-center justify-start">
      <img src={GrapeIcon} alt="Journey Icon" class="w-32 h-32 mb-4" />
      <h2 class="text-3xl text-burgundy-400 text-center mb-4">
        Choose Your Wine <br />
        <span class="font-bold">Journey</span>
      </h2>
      <p class="mb-12 text-burgundy-300 text-center text-xl">
        Every level is designed to bring you closer <br /> to the wines and experiences
        you’ll love.
      </p>
    </div>

    <!-- Plans Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4 px-8">
      {#each plans as plan}
        <!-- Plan Card -->
        <div
          class="flex relative flex-col gap-2 p-8 rounded-3xl {plan.color} transition group duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-102"
        >
          <div
            class="w-32 h-32 absolute right-0 top-0 rounded-xl p-1 flex items-center justify-center"
          >
            <div
              class="w-20 h-20 overflow-hidden transition-transform duration-300 group-hover:scale-110"
            >
              <img
                src={plan.icon}
                alt="Client avatar"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <h3 class=" text-4xl text-white mt-6">
            Wine <span class="font-bold">{plan.name}</span>
          </h3>
          <p class="text-white text-lg font-medium mb-4">{plan.tag}</p>
          <p class="text-white text-sm font-light mb-4">
            {plan.description_p1}
          </p>
          {#if plan.description_p2.length > 0}
            <p class="text-white text-sm font-semibold">
              {plan.description_p2}
            </p>
          {/if}
          <p class="text-white text-sm font-light">{plan.description_p3}</p>
        </div>

        <!-- Plan image -->
        <div
          class="rounded-3xl bg-center bg-cover"
          style="background-image: url('{plan.image}');"
        ></div>
      {/each}
    </div>
  </div>
</section>
