<script>
  import ContactBG from '$lib/assets/contact-bg.avif';
  import Reveal from '$lib/Reveal.svelte';
</script>

<section class="bg-burgundy-300">
  <div class="container mx-auto px-2 md:px-8 py-16">
    <Reveal y={40} duration={800}>
      <div
        class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-4xl p-0 md:p-8 xl:p-16 gap-0 md:gap-4 xl:gap-16"
      >
        <!-- Form grid -->
        <div class="border border-burgundy-100/20 rounded-2xl">
          <div class="p-8">
            <h2
              class="text-3xl text-burgundy-300 mb-6 text-center md:text-left"
            >
              <span class="font-bold">Contact</span> Us
            </h2>

            <p class="text-burgundy-300 mb-4 text-left text-sm"></p>

            <p class="text-burgundy-400 mb-4 text-center md:text-left">
              You can reach out to us directly. <br /> We usually reply within one
              business day:
            </p>

            <div class="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-3">
              <a
                href="mailto:p.wineries@wineuwant.com"
                class="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[15px] text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 hover:outline hover:outline-1 hover:outline-neutral-900/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="mail"
                  class="lucide lucide-mail size-4 text-neutral-700"
                  aria-hidden="true"
                  ><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                  ></path><rect x="2" y="4" width="20" height="16" rx="2"
                  ></rect></svg
                >
                p.wineries@wineuwant.com
              </a>
              <a
                href="tel:+12223334444"
                class="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[15px] text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 hover:outline hover:outline-1 hover:outline-neutral-900/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="phone"
                  class="lucide lucide-phone size-4 text-neutral-700"
                  aria-hidden="true"
                  ><path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                  ></path></svg
                >
                +1 (289) 241-9945
              </a>
            </div>
          </div>

          <div class="flex gap-3 items-center justify-center">
            <div class="h-px bg-neutral-200 grow"></div>
            <p class="text-burgundy-400 text-sm font-semibold">OR</p>
            <div class="h-px bg-neutral-200 grow"></div>
          </div>

          <div class="p-6 md:p-8">
            <p class="text-burgundy-400 mb-4 text-center md:text-left">
              Leave a message. <br /> Tell us a little about yourself to begin your
              wine journey:
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              class="grid grid-cols-1 xl:grid-cols-2 gap-3"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label for="name" class="mb-1.5 block font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  class="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 pr-12 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none resize-y"
                />
              </div>

              <div>
                <label for="email" class="mb-1.5 block font-medium">Email</label
                >
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 pr-12 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none resize-y"
                />
              </div>

              <div class="col-span-1 xl:col-span-2">
                <label for="city" class="block mb-1.5 font-medium">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Your city"
                  class="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 pr-12 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none resize-y"
                />
              </div>

              <div class="col-span-1 xl:col-span-2">
                <label for="message" class="block mb-1.5 font-medium"
                  >How we can help?</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  class="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 pr-12 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none resize-y"
                  placeholder="Share a brief description of your request..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="col-span-1 xl:col-span-2 bg-burgundy-300 hover:bg-burgundy-300/90 hover:shadow-sm hover:-translate-y-0.5 transition duration-300 ease-in-out text-white font-bold text-sm px-8 py-4 rounded-full cursor-pointer w-full sm:w-auto uppercase block content-center"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div
          class="bg-cover bg-right rounded-lg"
          style="background-image: url({ContactBG});"
        ></div>
      </div>
    </Reveal>
  </div>
</section>
