<script lang="ts">
	import { locale } from 'svelte-i18n';

	import TwitterIcon from '~icons/fa/twitter';
	import GithubIcon from '~icons/fa/github';
	import InstagramIcon from '~icons/fa/instagram';
	import LinkedinIcon from '~icons/fa/linkedin-square';

	export let img: string | undefined;
	export let name: string;
	export let position: string;
	export let twitter: string | undefined;
	export let github: string | undefined;
	export let instagram: string | undefined;
	export let linkedin: string | undefined;

	const socialLinks = [
		{ url: twitter, icon: TwitterIcon, label: 'Twitter', color: 'text-twitter-blue' },
		{ url: github, icon: GithubIcon, label: 'GitHub', color: 'text-slate-800' },
		{ url: instagram, icon: InstagramIcon, label: 'Instagram', color: 'text-instagram-pink' },
		{ url: linkedin, icon: LinkedinIcon, label: 'LinkedIn', color: 'text-linkedin-blue' }
	];

	$: marginClass = $locale === 'ar' ? 'ml-4' : 'mr-4';
</script>

<div class="w-full p-2">
	<div class="flex h-full items-center rounded-3xl bg-gray-50 p-4">
		<img
			src={img || `/images/initials/${name.charAt(0).toUpperCase()}.svg`}
			class={`${marginClass} h-20 w-20 flex-shrink-0 overflow-hidden rounded-full object-cover object-center`}
			alt={img ? `${name}'s Image` : `${name}'s Initial`}
		/>

		<div class="flex-grow">
			<h1 class="text-lg font-semibold tracking-wide text-gray-900 md:text-xl">
				{name}
			</h1>
			<p class="text-md font-medium text-gray-800 md:text-lg">{position}</p>
			<!-- Social Icons -->
			<div class="mt-1 flex gap-x-3">
				{#each socialLinks as { url, icon: Icon, label, color }}
					{#if url}
						<a
							href={url}
							target="_blank"
							rel="noreferrer"
							aria-label={`${name}'s ${label} Profile`}
							class="transition-transform duration-200 ease-in-out hover:scale-110"
						>
							<Icon class={`h-5 w-5 ${color}`} />
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
