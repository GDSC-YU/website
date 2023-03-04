<script>
  import { eventsContent } from "../data/eventsData.js";
</script>

<section id="Events">
  <!-- Wave Shape And Heading Text -->
  <div class="spacer blue-layer1" />
  <h1
    class="bg-google-blue text-center text-2xl font-bold text-white lg:text-5xl"
  >
    Recent Events!
  </h1>
  <div class="spacer blue-layer2" />

  <!-- Content -->

  <div class="container mx-auto px-5 py-16">
    <div class="flex flex-wrap">
      {#each eventsContent as content}
        <div class="p-4 sm:w-1/2 lg:w-1/3">
          <div
            class="relative flex overflow-hidden rounded-2xl shadow-md hover:shadow-2xl"
          >
            <img
              alt={content.imageAlt}
              class="absolute inset-0 h-full w-full object-cover object-center"
              src={content.eventImage}
            />

            <!-- Hover Content -->

            <div
              class="lg:duration-400 relative z-10 flex w-full flex-col items-center justify-center gap-y-10 bg-white px-8 py-10 text-center opacity-0 hover:opacity-100 lg:transition lg:ease-in-out"
              on:touchstart
            >
              <h1 class="text-xl font-bold tracking-widest text-google-blue">
                {content.eventTitle} - {content.eventType}
              </h1>
              <p class="font-medium leading-relaxed text-gray-900">
                {content.eventDescription}
              </p>
            </div>

            <!-- Visible Content -->

            <div class="absolute inset-0 bg-black opacity-50" />
            <div class="absolute inset-0 flex items-center justify-center px-8">
              <div class="flex flex-col text-center text-white">
                <h1 class="text-xl font-black">{content.eventTitle}</h1>
                <p class="font-medium">{content.eventType}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
