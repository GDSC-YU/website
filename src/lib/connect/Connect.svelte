<script>
	import Spacer from '$lib/Spacer.svelte';
	import Form from './ui/Form.svelte';
	import LogoBreak from './ui/LogoBreak.svelte';
	import SocialLinks from './ui/SocialLinks.svelte';
</script>

<section id="contact">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Connect With Us 📩" color="green" />
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
					Al Qassim Highway,
					<br />
					Riyadh Region 11512
				</p>
				<!-- Social Icons -->
				<SocialLinks />
			</div>
		</div>
	</div>
</section>
