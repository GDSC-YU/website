<script>
	import { t } from 'svelte-i18n';

	import Form from './ui/Form.svelte';
	import LogoBreak from './ui/LogoBreak.svelte';
	import SocialLinks from './ui/SocialLinks.svelte';

	import Spacer from '$lib/Spacer.svelte';
</script>

<section id="contact">
	<!-- Wave Shape And Heading Text -->
	<Spacer title={$t('connect')} color="green" />
	<!-- Content -->

	<div class="container mx-auto p-5">
		<div class="mx-auto md:w-2/3 lg:w-1/2">
			<Form />
			<!-- Seperator Line -->
			<LogoBreak />
			<!-- Email, Location -->
			<div class="w-full pb-2 text-center">
				<a
					href="mailto:gdsc@yu.edu.sa"
					class="relative border-b-2 border-transparent font-medium text-google-green transition duration-300 ease-in-out hover:border-google-green"
				>
					gdsc@yu.edu.sa
				</a>
				<p class="my-5 font-medium leading-normal">
					{$t('location')}
					<br />
					{$t('adress')}
				</p>
				<!-- Social Icons -->
				<SocialLinks />
			</div>
		</div>
	</div>
</section>
