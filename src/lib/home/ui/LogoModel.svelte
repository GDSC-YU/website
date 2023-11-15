<script>
	import { Canvas, T } from '@threlte/core';
	import { GLTF, OrbitControls } from '@threlte/extras';
</script>

<div class="w-5/6 md:w-1/2 lg:min-h-[24.5rem] lg:w-full lg:max-w-xl">
	<Canvas>
		<!-- Camera -->
		<T.PerspectiveCamera makeDefault position={[75, 0, 50]} fov={25}>
			<!-- Controls -->
			<OrbitControls autoRotate enableDamping enableZoom={false} />
		</T.PerspectiveCamera>
		<!-- Logo -->
		<GLTF url="/models/meshopt/gzip/gdsc-logo.glb" useMeshopt={true} scale={4.5} />
	</Canvas>
</div>
