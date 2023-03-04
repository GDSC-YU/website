<script>
  import * as Threlte from "@threlte/core";
  import { GLTF } from "@threlte/extras";
</script>

<div class="container w-5/6 md:w-1/2 lg:min-h-[24.5rem] lg:w-full lg:max-w-xl">
  <Threlte.Canvas>
    <!-- Camera -->
    <Threlte.PerspectiveCamera position={{ x: 75, y: 0, z: 50 }} fov={25}>
      <!-- Controls -->
      <!-- **minDistance={85} with a scale of {5} -->
      <Threlte.OrbitControls autoRotate enableZoom={false} />
    </Threlte.PerspectiveCamera>
    <!-- Logo -->
    <GLTF scale={4.5} url="/models/logo-original.gltf" />
  </Threlte.Canvas>
</div>
