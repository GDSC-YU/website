<script lang="ts">
	export let title: string;
	export let color: string;
</script>

<div>
	<!-- top layer -->
	<div class={`spacer ${color}-layer1`} />
	<!-- middle layer -->
	<div
		class:bg-google-blue={color === 'blue'}
		class:bg-google-red={color === 'red'}
		class:bg-google-yellow={color === 'yellow'}
		class:bg-google-green={color === 'green'}
		class="flex justify-between p-2 text-white"
	>
		<!-- title -->
		<h1 class="w-full px-2 text-center text-4xl font-bold md:text-5xl">
			{title}
		</h1>
		<!-- middle layer end -->
	</div>
	<!-- bottom layer -->
	<div class={`spacer ${color}-layer2`} />
</div>
