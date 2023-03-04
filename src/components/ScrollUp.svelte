<script>
  import { onMount, onDestroy } from "svelte";
  import * as animateScroll from "svelte-scrollto-next";
  import Icon from "@iconify/svelte";

  const colors = {
    Events: "bg-google-blue",
    Projects: "bg-google-red",
    Team: "bg-google-yellow",
    "Contact-Us": "bg-google-green",
  };

  let activeSection = null;
  let isScrolled = false;

  //stuff

  function handleScroll() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition <= window.innerHeight) {
      isScrolled = false;
      return;
    }

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const top = section.offsetTop;
      if (scrollPosition >= top) {
        activeSection = section.id;
        isScrolled = true;
        break;
      }
    }
  }

  function scrollToTop() {
    animateScroll.scrollToTop();
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

{#if isScrolled && activeSection != null}
  <button
    class="fixed bottom-8 right-8 z-50 {colors[
      activeSection
    ]} rounded-3xl p-2 text-white"
    on:click={scrollToTop}
  >
    <Icon icon="ri:arrow-up-line" class="h-7 w-7" />
  </button>
{/if}
