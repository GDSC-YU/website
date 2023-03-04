<script>
  import LogoModel from "./LogoModel.svelte";
  import * as animateScroll from "svelte-scrollto-next";
</script>

<section id="landing" class="min-h-[85vh] px-6">
  <div
    class="container mx-auto flex flex-col items-center gap-y-24 px-6 py-14 md:flex-row lg:py-20"
  >
    <div
      class="mx-auto flex flex-col items-center gap-y-9 text-center text-white md:w-1/2 md:items-start md:gap-y-6 md:text-left lg:flex-grow"
    >
      <a
        href="https://yu.edu.sa/campus/student-clubs/"
        target="_blank"
        rel="noreferrer"
        class="text-lg font-bold text-orange-400 underline-offset-8 hover:underline lg:text-3xl"
        >Al-Yamamah University</a
      >
      <h1 class="text-3xl font-bold leading-relaxed lg:text-6xl">
        Google Developers <br /> Student Club
      </h1>
      <p class="text-lg font-bold leading-relaxed lg:text-3xl">
        Learn, Grow, and Connect!
      </p>
      <div class="flex justify-center">
        <button
          class="rounded bg-orange-400 py-2 px-12 hover:scale-105"
          on:click={() =>
            animateScroll.scrollTo({
              element: "#Contact-Us",
              offset: 90,
            })}
        >
          <p class="text-lg font-bold">Learn More</p>
        </button>
      </div>
    </div>
    <LogoModel />
  </div>
</section>
