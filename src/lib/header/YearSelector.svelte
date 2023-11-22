<script lang="ts">
	let isDisplayed = false;
	const toggleMenu = () => {
		isDisplayed = !isDisplayed;
	};
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
			on:click={toggleMenu}
		>
			Options
			<svg
				class="-mr-1 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	{#if isDisplayed}
		<div
			class="right-50 absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700"
					role="menuitem"
					tabindex="-1"
					id="menu-item-0">2024-2023</a
				>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700"
					role="menuitem"
					tabindex="-1"
					id="menu-item-1">2022-2023</a
				>
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700"
					role="menuitem"
					tabindex="-1"
					id="menu-item-2">2021-2022</a
				>
			</div>
		</div>
	{/if}
</div>
