<script lang="ts">
	import { locale } from 'svelte-i18n';

	import TwitterIcon from '~icons/fa/twitter';
	import GithubIcon from '~icons/fa/github';
	import InstagramIcon from '~icons/fa/instagram';
	import LinkedinIcon from '~icons/fa/linkedin-square';

	export let img: string | null;
	export let name: string;
	export let position: string;
	export let twitter: string | null;
	export let github: string | null;
	export let instagram: string | null;
	export let linkedin: string | null;

	$: marginClass = $locale === 'ar' ? 'ml-4' : 'mr-4';
</script>

<div class="w-full p-2">
	<div class="flex h-full items-center rounded-3xl bg-gray-50 p-4">
		{#if img}
			<img
				src={img}
				class={`${marginClass} h-20 w-20 flex-shrink-0 overflow-hidden rounded-full object-cover object-center`}
				alt={`${name}'s Image`}
			/>
		{:else}
			<img
				alt={`${name}'s Initial`}
				class={`${marginClass} h-20 w-20 flex-shrink-0 overflow-hidden rounded-full object-cover object-center`}
				src={`/images/initials/${name.charAt(0).toUpperCase()}.svg`}
			/>
		{/if}

		<div class="flex-grow">
			<h1 class="text-lg font-semibold tracking-wide text-gray-900 md:text-xl">
				{name}
			</h1>
			<div class="gap-x-3 md:flex">
				<p class="text-md font-medium text-gray-800 md:text-lg">{position}</p>
				<!-- Social Icons -->

				{#if github || twitter || instagram || linkedin}
					<div class="mt-1 flex gap-x-3">
						{#if twitter}
							<a
								href={twitter}
								target="_blank"
								rel="noreferrer"
								aria-label={`${name}'s Twitter Account`}
								class="transition-transform duration-200 ease-in-out hover:scale-110"
							>
								<TwitterIcon class="h-5 w-5 text-twitter-blue" />
							</a>
						{/if}
						{#if github}
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								aria-label={`${name}'s GitHub Profile`}
								class="transition-transform duration-200 ease-in-out hover:scale-110"
							>
								<GithubIcon class="h-5 w-5 text-slate-800" />
							</a>
						{/if}
						{#if instagram}
							<a
								href={instagram}
								target="_blank"
								rel="noreferrer"
								aria-label={`${name}'s Instagram Account`}
								class="transition-transform duration-200 ease-in-out hover:scale-110"
							>
								<InstagramIcon class="h-5 w-5 text-instagram-pink" />
							</a>
						{/if}
						{#if linkedin}
							<a
								href={linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label={`${name}'s LinkedIn Profile`}
								class="transition-transform duration-200 ease-in-out hover:scale-110"
							>
								<LinkedinIcon class="h-5 w-5 text-linkedin-blue" />
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
