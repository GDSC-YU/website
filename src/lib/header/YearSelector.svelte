<script lang="ts">
	import Book from '~icons/ri/book-3-line';

	let isDisplayed = true;
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
			<Book class="h-9 w-9" />
		</button>
	</div>
	<div
		class:hidden={isDisplayed}
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
				id="menu-item-0">GDSC 2023-2024</a
			>
			<a
				href="#"
				class="block px-4 py-2 text-sm text-gray-700"
				role="menuitem"
				tabindex="-1"
				id="menu-item-1">GDSC 2022-2023</a
			>
			<a
				href="#"
				class="block px-4 py-2 text-sm text-gray-700"
				role="menuitem"
				tabindex="-1"
				id="menu-item-2">GDSC 2021-2022</a
			>
		</div>
	</div>
</div>
