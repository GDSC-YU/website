<script>
	import ConnectButton from './ConnectButton.svelte';
	import { t } from 'svelte-i18n';
</script>

<form name="Contact-Us" method="POST" data-netlify="true" class="-m-2 flex flex-wrap font-medium">
	<!-- First Name Input -->
	<div class="w-1/2 p-2">
		<div class="relative">
			<label for="first-name" class="leading-8">{$t('Fname')}</label>
			<input type="text" required id="first-name" name="first-name" class="contactInput" />
		</div>
	</div>
	<!-- Last Name Input -->
	<div class="w-1/2 p-2">
		<div class="relative">
			<label for="last-name" class="leading-8">{$t('Lname')}</label>
			<input type="text" required id="last-name" name="last-name" class="contactInput" />
		</div>
	</div>
	<!-- Email Input -->
	<div class="w-full p-2">
		<div class="relative">
			<label for="email" class="leading-8">{$t('email')}</label>
			<input type="email" required id="email" name="email" class="contactInput" />
		</div>
	</div>
	<!-- Message Input -->
	<div class="w-full p-2">
		<div class="relative">
			<label for="message" class="leading-8">{$t('message')}</label>
			<textarea
				required
				id="message"
				name="message"
				class="contactInput h-32 resize-none leading-6"
			/>
		</div>
	</div>
	<!-- Send Button -->
	<div class="flex w-full justify-center p-5">
		<ConnectButton />
	</div>
</form>

<style lang="postcss">
	.contactInput {
		@apply w-full rounded-lg border border-gray-300 px-3 py-1 leading-8 text-gray-800 outline-none transition duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-google-green dark:bg-gray-100;
	}
</style>
