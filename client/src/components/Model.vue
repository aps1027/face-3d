<template>
  <div ref="container" class="container"></div>
</template>

<script>
import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";
let container;
let scene;
let camera;
let controls;
let renderer;

export default {
  data() {
    return {
      sceneBGColorCode: "#8fbcd4",
      floorColorCode: "#09b0fa",
      wallColorCode: "#e587a0",
      roomLength: 20,
      roomWidth: 15,
      roomHeight: 8,
      thinkness: 0.5,
      scale: 0.5,
    };
  },
  methods: {
    /**
     * This is initial step.
     */
    init() {
      container = this.$refs.container;
      scene = new THREE.Scene();
      scene.background = new THREE.Color(this.sceneBGColorCode);

      this.createCamera();
      this.createControls();
      this.createLights();
      this.createWalls();
      this.createFloor();
      this.createRenderer();

      controls.update();
      /**
       * This is animation function.
       */
      const animate = function () {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });

      animate();
    },

    /**
     * This is to create camera object.
     */
    createCamera() {
      camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(4, 10, 10);
    },

    /**
     * This is to create control (e.g. OrbitControls).
     */
    createControls() {
      controls = new OrbitControls(camera, container);
    },

    /**
     * This is to create Lights (hemispherr light and directional light).
     */
    createLights() {
      const ambientLight = new THREE.HemisphereLight(
        0xddeeff, // sky color
        0x202020, // ground color
        2 // intensity
      );

      const mainLight = new THREE.DirectionalLight(0xffffff, 2);
      mainLight.position.set(10, 10, 10);

      scene.add(ambientLight, mainLight);
    },

    /**
     * This is to create walls.
     */
    createWalls() {
      // first wall
      const firstGeometry = new THREE.BoxGeometry(
        this.thinkness * this.scale,
        this.roomHeight * this.scale,
        this.roomLength * this.scale
      );
      const firstMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.wallColorCode),
        flatShading: true,
      });
      const loader = new THREE.TextureLoader();
      const materials = [
        firstMaterial,
        new THREE.MeshBasicMaterial({map: loader.load(require("../assets/images/wallpaper.jpeg"))}),
        firstMaterial,
        firstMaterial,
        firstMaterial,
        firstMaterial
      ];

      let firstWall = new THREE.Mesh(firstGeometry, materials);
      firstWall.position.set(
        (this.roomWidth * this.scale) / 2,
        (this.roomHeight * this.scale) / 2,
        0
      );
      scene.add(firstWall);

      // second wall
      const secondGeometry = new THREE.BoxGeometry(
        this.thinkness * this.scale,
        this.roomHeight * this.scale,
        this.roomLength * this.scale
      );
      const secondMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.wallColorCode),
        flatShading: true,
      });
      let secondWall = new THREE.Mesh(secondGeometry, secondMaterial);
      secondWall.position.set(
        -(this.roomWidth * this.scale) / 2,
        (this.roomHeight * this.scale) / 2,
        0
      );
      scene.add(secondWall);

      // third wall
      const thirdGeometry = new THREE.BoxGeometry(
        this.roomWidth * this.scale + this.thinkness * this.scale,
        this.roomHeight * this.scale,
        this.thinkness * this.scale
      );
      const thirdMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.wallColorCode),
        flatShading: true,
      });
      let thirdWall = new THREE.Mesh(thirdGeometry, thirdMaterial);
      thirdWall.position.set(
        0,
        (this.roomHeight * this.scale) / 2,
        (this.roomLength * this.scale) / 2
      );
      scene.add(thirdWall);

      // fouth wall
      const fouthGeometry = new THREE.BoxGeometry(
        this.roomWidth * this.scale + this.thinkness * this.scale,
        this.roomHeight * this.scale,
        this.thinkness * this.scale
      );
      const fouthMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.wallColorCode),
        flatShading: true,
      });
      let fouthWall = new THREE.Mesh(fouthGeometry, fouthMaterial);
      fouthWall.position.set(
        0,
        (this.roomHeight * this.scale) / 2,
        -(this.roomLength * this.scale) / 2
      );
      scene.add(fouthWall);
    },

    /**
     * This is to create floor.
     */
    createFloor() {
      const texture = new THREE.TextureLoader().load(
        require("../assets/images/light_floor.png")
      );
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      // floor
      const floorGeometry = new THREE.PlaneGeometry(
        this.roomWidth * this.scale,
        this.roomLength * this.scale
      );
      floorGeometry.rotateX(-Math.PI * 0.5);
      const floorMaterial = new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        flatShading: true,
        map: texture,
      });

      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.position.set(0, 0.01, 0);
      scene.add(floor);
    },

    /**
     * This is to create renderer.
     */
    createRenderer() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);

      renderer.setPixelRatio(window.devicePixelRatio);

      renderer.physicallyCorrectLights = true;
      container.appendChild(renderer.domElement);
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
