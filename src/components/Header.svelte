<script>
  import logo from "/gdsc.svg";
  import * as animateScroll from "svelte-scrollto-next";
  import Icon from "@iconify/svelte";

  import { navContent } from "../data/navData";

  let mobileNavOpened = false;

  function handleDad() {
    mobileNavOpened = !mobileNavOpened;
  }

  const mql = window.matchMedia("(max-width: 777px)");

  mql.addEventListener("change", (e) => {
    mobileView = e.matches;
  });
  let mobileView = mql.matches;
</script>

<header class="font-bold text-white">
  <!-- Desktop Nav -->
  {#if !mobileView}
    <div class="container mx-auto flex flex-row flex-wrap items-center py-6">
      <nav
        class="flex flex-wrap items-center justify-center gap-x-6 md:ml-auto md:mr-auto"
      >
        <!-- Links -->
        {#each navContent as link}
          <button
            on:click={() =>
              animateScroll.scrollTo({
                element: link.href,
                offset: 90,
              })}
          >
            <p class="text-lg hover:scale-110">
              {link.name}
            </p>
          </button>
        {/each}
      </nav>
    </div>
    <!-- Mobile Nav Button && Logo -->
  {:else}
    <div class="container mx-auto flex items-center justify-between p-5">
      <img src={logo} alt="Google Developers Student Club Logo" />
      <button on:click={() => handleDad()}>
        <Icon icon="ri:menu-4-fill" class="h-9 w-9" />
      </button>
    </div>
  {/if}
  <!-- Mobile Nav Expanded -->
  {#if mobileNavOpened}
    <nav class="fixed top-0 left-0 z-10 h-screen w-screen bg-[#282C34]">
      <div class="flex items-center justify-between p-5">
        <img src={logo} alt="Google Developers Student Club Logo" />
        <button on:click={() => handleDad()}>
          <Icon icon="ri:close-fill" class="h-9 w-9" />
        </button>
      </div>
      <div
        class="absolute top-1/2 left-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-8"
      >
        <!-- Links -->
        {#each navContent as link}
          <button
            on:click={() => {
              animateScroll.scrollTo({
                element: link.href,
                offset: 20,
              });
              handleDad();
            }}
          >
            <p class="text-2xl">{link.name}</p>
          </button>
        {/each}
      </div>
      <img
        src="/header-guy.svg"
        alt="cute header guy"
        class="absolute bottom-0 right-0"
      />
    </nav>
  {/if}
</header>
