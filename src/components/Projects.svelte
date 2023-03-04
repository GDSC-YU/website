<script>
  import Icon from "@iconify/svelte";
  import { projectsContent } from "../data/projectsData.js";
</script>

<section id="Projects">
  <!-- Wave Shape And Heading Text -->
  <div class="spacer red-layer1" />
  <h1
    class="bg-google-red text-center text-2xl font-bold text-white lg:text-5xl"
  >
    Our Projects
  </h1>
  <div class="spacer red-layer2" />

  <!-- Content -->

  <div class="container mx-auto px-5 py-16">
    <div class="flex flex-wrap">
      {#each projectsContent as content}
        <div class="p-4 sm:w-1/2 lg:w-1/3">
          <div
            class="relative flex overflow-hidden rounded-2xl shadow-md hover:shadow-2xl"
          >
            <img
              alt={content.imageAlt}
              class="absolute inset-0 h-full w-full object-cover object-center"
              src={content.projectImage}
            />

            <!-- Hover Content -->

            <div
              class="lg:duration-400 relative z-10 flex w-full flex-col items-center justify-center gap-y-10 bg-white px-8 py-10 text-center opacity-0 hover:opacity-100 lg:transition lg:ease-in-out"
              on:touchstart
            >
              <h1 class="text-lg font-bold tracking-widest text-google-red">
                {content.projectName}
              </h1>
              <p class="font-medium leading-relaxed text-gray-900">
                {content.projectDesc}
              </p>

              <!-- Github & Project Icons -->
              <div class="flex gap-x-5">
                <a
                  href={content.projectGithub}
                  target="_blank"
                  rel="noreferrer"
                  class="text-gray-600 hover:text-black"
                >
                  <Icon icon="ri:github-fill" class="h-8 w-8" />
                </a>
                <a
                  href={content.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  class="text-gray-600 hover:text-black"
                >
                  <Icon icon="line-md:external-link" class="h-8 w-8" />
                </a>
              </div>
            </div>

            <!-- Visible Content -->

            <div class="absolute inset-0 bg-black opacity-50" />
            <div class="absolute inset-0 flex items-center justify-center px-8">
              <div class="text-center text-white">
                <h1 class="text-xl font-black">{content.projectName}</h1>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
