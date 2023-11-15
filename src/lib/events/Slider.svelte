<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/sea-green';

	import eventsData from '$data/events';
</script>

<Splide
	options={{
		type: 'loop',
		perPage: 1,
		drag: true,
		autoplay: true,
		interval: 3500,
		lazyLoad: 'nearby',
		arrows: false
	}}
	aria-label="Our Most Recent Events"
>
	{#each eventsData as event}
		<SplideSlide class="flex h-96 justify-center">
			<div class="w-full sm:w-1/2">
				<div
					class="group relative flex h-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl"
				>
					<img
						src={event.image}
						alt={event.imageAlt}
						class="absolute inset-0 h-full w-full object-cover object-center group-hover:blur"
					/>

					<!-- Hover Content -->
					<div
						class="relative z-10 flex w-full flex-col items-center justify-center gap-y-10 px-6 py-14 text-center text-slate-100 opacity-0 transition duration-100 ease-in-out hover:opacity-100"
					>
						<div>
							<h1 class="text-xl font-bold tracking-widest text-google-blue md:text-2xl">
								{event.title}
							</h1>
							<p class="font-semibold tracking-wider md:text-lg">
								{event.type}
							</p>
						</div>
						<p class="text-sm font-medium leading-relaxed md:text-base">
							{event.description}
						</p>
					</div>

					<!-- Visible Content -->
					<div class="absolute inset-0 bg-black opacity-50" />
					<div class="absolute inset-0 flex items-center justify-center group-hover:invisible">
						<div class="flex flex-col text-center text-slate-100">
							<h1 class="text-xl font-extrabold md:text-3xl">{event.title}</h1>
							<p class="font-bold md:text-xl">{event.type}</p>
						</div>
					</div>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
