<script>
	import { onMount, onDestroy } from 'svelte';
	import { t } from 'svelte-i18n';

	import Langswitch from './langswitch.svelte';
	import DarkToggle from './DarkToggle.svelte';

	import Menu from '~icons/ri/menu-4-fill';
	import Close from '~icons/ri/close-fill';

	import navLinkKeys from '$data/nav';

	let isMenuOpen = false;

	$: translatedNavLinks = navLinkKeys.map((link) => ({
		...link,
		name: $t(link.name)
	}));

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		updateBodyOverflow();
	};

	function updateBodyOverflow() {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = isMenuOpen ? 'hidden' : '';
		}
	}

	onDestroy(updateBodyOverflow);

	onMount(() => {
		if (isMenuOpen) {
			updateBodyOverflow();
		}
	});
</script>

<header class="font-bold">
	<nav>
		<div class="z-50 flex w-full justify-between p-5" class:fixed={isMenuOpen}>
			<DarkToggle />
			<Langswitch />

			<button id="menu" aria-label="Toggle Menu" on:click={toggleMenu}>
				<!-- Corrected class bindings -->
				<Menu
					class={`${
						isMenuOpen ? 'hidden' : ''
					} h-9 w-9 transition duration-300 ease-in-out lg:hover:scale-90`}
				/>
				<Close
					class={`${
						!isMenuOpen ? 'hidden' : ''
					} h-9 w-9 transition duration-300 ease-in-out lg:hover:scale-90`}
				/>
			</button>
		</div>

		<div
			class="fixed z-40 flex h-screen w-screen flex-col items-center justify-center gap-y-10 bg-slate-200 text-black dark:bg-secret dark:text-slate-100"
			class:hidden={!isMenuOpen}
		>
			{#each translatedNavLinks as { name, href }}
				<a
					{href}
					on:click={toggleMenu}
					class="text-2xl transition duration-300 ease-in-out lg:hover:scale-110"
				>
					{name}
				</a>
			{/each}

			<img
				src="/images/header-guy.svg"
				alt="Our Cute Astronaut Guy :)"
				class="absolute bottom-0 right-0 transition duration-300 ease-in-out lg:hover:scale-110"
			/>
		</div>
	</nav>
</header>
