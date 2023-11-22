<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import ArrowIcon from '~icons/ri/arrow-up-line';

	type ColorKeys = 'events' | 'projects' | 'team' | 'contact';

	const colors: Record<ColorKeys, string> = {
		events: 'bg-google-blue',
		projects: 'bg-google-red',
		team: 'bg-google-yellow',
		contact: 'bg-google-green'
	};

	let activeSection: string | null;
	let isScrolled = false;

	function handleScroll() {
		const sections = document.querySelectorAll('section[id]');
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		if (scrollPosition <= window.innerHeight) {
			isScrolled = false;
			return;
		}

		for (let i = sections.length - 1; i >= 0; i--) {
			const section = sections[i] as HTMLElement;
			const top = section.offsetTop;
			if (scrollPosition >= top) {
				activeSection = section.id;
				isScrolled = true;
				break;
			}
		}
	}

	const getColor = (key: string): string => {
		return colors[key as keyof typeof colors] || '';
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

{#if isScrolled && activeSection != null}
	<button
		aria-label="Scroll to the top"
		class="fixed bottom-8 right-8 z-50 {getColor(
			activeSection
		)} rounded-3xl p-2 text-white transition duration-300 ease-in-out hover:scale-105"
		on:click={() => {
			window.scrollTo({
				top: 0
			});
		}}
	>
		<ArrowIcon class="h-7 w-7" />
	</button>
{/if}
