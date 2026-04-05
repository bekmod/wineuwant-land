<script>
  import ContactBG from '$lib/assets/contact-bg.avif';
</script>

<section class="bg-burgundy-300">
  <div class="container mx-auto px-8 py-16">
    <div
      class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl px-16 py-16 gap-16"
    >
      <div>
        <h2 class="text-3xl text-burgundy-300 mb-6">
          <span class="font-bold">Contact</span> Us
        </h2>

        <p class="text-burgundy-400 mb-8 text-left text-lg">
          Tell us a little about yourself to begin your wine journey.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          class="flex flex-col"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="mb-4">
            <label for="name" class="mb-1 block font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              class="border border-form-border-400 rounded-lg py-2 px-4 w-full"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="mb-1 block font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              class="border border-form-border-400 rounded-lg py-2 px-4 w-full"
            />
          </div>
          <div class="mb-4">
            <label for="city" class="block mb-1 font-medium">City</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Your city"
              class="border border-form-border-400 rounded-lg py-2 px-4 w-full"
            />
          </div>

          <div class="bg-form-border-500 rounded-lg p-4 mb-8">
            <p class="block mb-4 font-medium">
              Are you 19 years of age or older?
            </p>
            <input type="radio" name="age19" id="age-yes" value="yes" />
            <label for="age-yes" class="mr-4 cursor-pointer">Yes</label>

            <input type="radio" name="age19" id="age-no" value="no" />
            <label for="age-no" class="cursor-pointer">No</label>
          </div>

          <button
            type="submit"
            class="bg-burgundy-300 hover:bg-burgundy-300/90 shadow-md hover:shadow-lg transision duration-300 ease-in-out text-white text-xs px-24 py-4 rounded-full cursor-pointer mr-auto"
            >SUBMIT</button
          >
        </form>
      </div>
      <div
        class="bg-center bg-cover rounded-lg"
        style="background-image: url({ContactBG});"
      ></div>
    </div>
  </div>
</section>
