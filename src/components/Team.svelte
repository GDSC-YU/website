<script>
  import { us } from "../data/ourTeam.js";
</script>

<section id="Team">
  <!-- Wave Shape And Heading Text -->
  <div class="spacer yellow-layer1" />
  <h1
    class="bg-google-yellow text-center text-2xl font-bold text-white lg:text-5xl"
  >
    Our Team
  </h1>
  <div class="spacer yellow-layer2" />

  <!-- Content -->

  <div class="container px-5 py-14 lg:py-24">
    <div class="flex flex-wrap gap-y-4 lg:px-5">
      {#each us as dude}
        <div class="w-full p-2 md:w-1/2 lg:w-1/3">
          <div
            class="flex h-full items-center rounded-lg border border-gray-300 bg-gray-100 p-4"
          >
            <img
              alt="team"
              class="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-full object-cover object-center"
              src={dude.image}
            />
            <div class="flex-grow">
              <h2 class="font-medium text-black">
                {dude.name}
              </h2>
              <p class="text-gray-800">{dude.position}</p>
            </div>
          </div>
        </div>{/each}
    </div>
  </div>
</section>
