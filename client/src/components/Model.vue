<template>
  <div ref="container" class="container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  methods: {
    init: function () {
      const container = this.$refs.container;
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;
      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });

      animate();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
