<script>
  import Icon from "@iconify/svelte";
</script>

<section id="Contact-Us">
  <!-- Wave Shape And Heading Text -->
  <div class="spacer green-layer1" />
  <h1
    class="bg-google-green text-center text-2xl font-bold text-white lg:text-5xl"
  >
    Contact Us
  </h1>
  <div class="spacer green-layer2" />

  <!-- Content -->

  <div class="container mx-auto p-5 text-white">
    <div class="mx-auto md:w-2/3 lg:w-1/2">
      <form name="Contact-Us" method="POST" netlify class="-m-2 flex flex-wrap">
        <!-- First Name Input -->
        <div class="w-1/2 p-2">
          <div class="relative">
            <label for="name" class="leading-8">First Name:</label>
            <input
              type="text"
              required
              id="first-name"
              name="first-name"
              class="w-full rounded bg-gray-100 bg-opacity-50 py-1 px-3 leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-google-green"
            />
          </div>
        </div>
        <!-- Last Name Input -->
        <div class="w-1/2 p-2">
          <div class="relative">
            <label for="name" class="leading-8">Last Name:</label>
            <input
              type="text"
              required
              id="last-name"
              name="last-name"
              class="w-full rounded bg-gray-100 bg-opacity-50 py-1 px-3 leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-google-green"
            />
          </div>
        </div>
        <!-- Email Input -->
        <div class="w-full p-2 ">
          <div class="relative">
            <label for="email" class="leading-8">Your Email:</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              class="0 w-full rounded bg-gray-100 bg-opacity-50 py-1 px-3 leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-google-green"
            />
          </div>
        </div>
        <!-- Message Input -->
        <div class="w-full p-2">
          <div class="relative">
            <label for="message" class="leading-7">Your Message:</label>
            <textarea
              required
              id="message"
              name="message"
              class="h-32 w-full resize-none rounded bg-gray-100 bg-opacity-50 py-1 px-3 leading-6 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-google-green"
            />
          </div>
        </div>
        <!-- Send Button -->
        <div class="w-full p-2">
          <button
            type="submit"
            class="mx-auto flex rounded bg-google-green py-2 px-8 hover:scale-105"
          >
            <p class="text-lg font-bold">Send</p>
          </button>
        </div>
        <!-- Seperator Line && Email, Text and Icons -->
        <div class="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
          <a
            href="mailto:gdsc@yu.edu.sa"
            class="text-google-green underline-offset-8 hover:underline"
            >gdsc@yu.edu.sa</a
          >
          <p class="my-5 leading-normal">
            Al Qassim Highway,
            <br />Riyadh Region 11512
          </p>
          <span class="inline-flex gap-x-4">
            <a
              href="https://twitter.com/GDSC_YU"
              target="_blank"
              rel="noreferrer"
              class="hover:text-twitter-blue"
            >
              <Icon icon="fa:twitter" class="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/gdsc_yu/"
              target="_blank"
              rel="noreferrer"
              class="hover:text-dark-pink"
            >
              <Icon icon="fa:instagram" class="h-6 w-6" />
            </a>
          </span>
        </div>
      </form>
    </div>
  </div>
</section>
