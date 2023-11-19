<script>
	import Spacer from '$lib/Spacer.svelte';

	import projectsData from '$data/projects';

	import GitHubIcon from '~icons/ri/github-fill';
	import LinkIcon from '~icons/ri/external-link-line';
</script>

<section id="projects">
	<!-- Wave Shape And Heading Text -->
	<Spacer title="Explore Our Projects 🚀" color="red" />
	<!-- Content -->

	<div class="w-full px-6 py-20 lg:px-9">
		<div class="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projectsData as { image, imageAlt, name, description, GitHub, Link }}
				<div>
					<div
						class="group relative flex h-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl"
					>
						<img
							src={image}
							alt={imageAlt}
							class="absolute inset-0 h-full w-full object-cover object-center group-hover:blur-lg"
						/>

						<!-- Hover Content -->
						<div
							class="relative z-10 flex w-full flex-col items-center justify-center gap-y-6 px-8 py-[4.5rem] text-center opacity-0 transition duration-100 ease-in-out hover:opacity-100"
						>
							<h1 class="text-lg font-bold tracking-widest text-google-red">
								{name}
							</h1>
							<p class="font-medium leading-relaxed text-slate-100">
								{description}
							</p>

							<!-- Github & Projects iconst -->

							<div class="invisible flex gap-x-5 group-hover:visible">
								<a href={GitHub} target="_blank" rel="noreferrer" aria-label="Github Link">
									<GitHubIcon
										class="h-8 w-8 text-slate-100 transition duration-300 ease-in-out hover:scale-105"
									/>
								</a>
								<a href={Link} target="_blank" rel="noreferrer" aria-label="Project Link">
									<LinkIcon
										class="h-8 w-8 text-slate-100 transition duration-300 ease-in-out hover:scale-105"
									/>
								</a>
							</div>
						</div>
						<!-- Visible Content -->

						<div class="absolute inset-0 bg-black opacity-50" />
						<div
							class="absolute inset-0 flex items-center justify-center px-8 group-hover:invisible"
						>
							<div class="text-center text-slate-100">
								<h1 class="text-xl font-bold">{name}</h1>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
