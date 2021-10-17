<template>
  <div>
    <SideTabBar @get-switch="getSwitch" />
    <Object3D />
    <ColorPalette :colorItemList="colorList" @get-color="getColor" />
    <div ref="container" class="w-screen h-screen"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";
import SideTabBar from "./SideTabBar.vue";
import ColorPalette from "./ColorPalette.vue";
import Object3D from "./3DObject.vue";

let container;
let scene;
let camera;
let controls;
let renderer;

let firstWall;
let secondWall;
let thirdWall;
let fouthWall;
let floor;
let door;
let windowFrame;

let commonWallMaterial;
export default {
  components: {
    SideTabBar,
    ColorPalette,
    Object3D,
  },
  data() {
    return {
      sceneBGColorCode: "#efefef",
      wallColorCode: "#ffffff",
      floorColorCode: "#ffffff",
      frameColor: "#2C3E50",
      roomLength: 20,
      roomWidth: 15,
      roomHeight: 8,
      thinkness: 0.5,
      scale: 0.5,
      colorList: [],
      switchItem: null,
    };
  },
  computed: {
    /**
     * This is to get image source.
     * @param {string} imgPath image path
     * @returns image
     */
    getSrc() {
      return (imgPath) => require("../assets/" + imgPath);
    },
  },
  methods: {
    /**
     * This is to change window design.
     * @param {object} windowItem window item object
     * @returns void
     */
    changeWindow(windowItem) {
      let windowMaterial;
      if (windowItem.texture) {
        const texture = new THREE.TextureLoader().load(
          this.getSrc(windowItem.texture)
        );

        windowMaterial = new THREE.MeshStandardMaterial({
          flatShading: true,
          map: texture,
        });
        windowFrame.geometry = new THREE.PlaneGeometry(
          windowItem.size[0],
          windowItem.size[1]
        );
        windowFrame.material = windowMaterial;
      }
    },
    /**
     * This is to change door design.
     * @param {object} doorItem door item object
     * @returns void
     */
    changeDoor(doorItem) {
      let doorMaterial;
      if (doorItem.texture) {
        const texture = new THREE.TextureLoader().load(
          this.getSrc(doorItem.texture)
        );

        doorMaterial = new THREE.MeshStandardMaterial({
          flatShading: true,
          map: texture,
        });
        door.material = doorMaterial;
      }
    },

    /**
     * This is to change floor color design.
     * @param {oject} colorItem floor color item
     * @returns void
     */
    changeFloorColor(colorItem) {
      let floorMaterial;
      if (colorItem.texture) {
        const texture = new THREE.TextureLoader().load(
          this.getSrc(colorItem.texture)
        );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(colorItem.size[0], colorItem.size[1]);

        floorMaterial = new THREE.MeshStandardMaterial({
          side: THREE.DoubleSide,
          flatShading: true,
          map: texture,
        });
        floor.material = floorMaterial;
      }
    },
    /**
     * This is to change wall color design.
     * @param {object} colorItem color item
     * @returns void
     */
    changeWallColor(colorItem) {
      let wallMaterial;
      if (colorItem.texture) {
        const loader = new THREE.TextureLoader();

        wallMaterial = new THREE.MeshStandardMaterial({
          map: loader.load(this.getSrc(colorItem.texture)),
        });
      } else {
        wallMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(`#${colorItem.color}`),
          flatShading: true,
        });
      }
      firstWall.material = [
        null,
        wallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
      ];
      secondWall.material = [
        wallMaterial,
        null,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
      ];
      thirdWall.material = [
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        null,
        wallMaterial,
      ];
      fouthWall.material = [
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        wallMaterial,
        null,
      ];
    },
    /**
     * This is to get user selected color or design.
     * @param {object} colorItem user selected color or design
     * @returns void
     */
    getColor(colorItem) {
      if (this.switchItem.name == "wall") {
        this.changeWallColor(colorItem);
      } else if (this.switchItem.name == "floor") {
        this.changeFloorColor(colorItem);
      } else if (this.switchItem.name == "door") {
        this.changeDoor(colorItem);
      } else if (this.switchItem.name == "window") {
        this.changeWindow(colorItem);
      }
    },

    /**
     * This is to get user selected switch for material items (i.e. wall, floor, door, window),
     * @param {object} materialSwitch material switch
     * @returns void
     */
    getSwitch(materialSwitch) {
      this.switchItem = materialSwitch;
      this.colorList = materialSwitch.colorList;
    },
    /**
     * This is initial step.
     * @returns void
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
      this.createDoor();
      this.createWindow();
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
     * @returns void
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
     * @returns void
     */
    createControls() {
      controls = new OrbitControls(camera, container);
    },

    /**
     * This is to create Lights (hemispherr light and directional light).
     * @returns void
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
     * @returns void
     */
    createWalls() {
      // common wall material
      commonWallMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.wallColorCode),
        flatShading: true,
      });

      // common material list
      const materials = [
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
        commonWallMaterial,
      ];

      // first wall
      const firstGeometry = new THREE.BoxGeometry(
        this.thinkness * this.scale,
        this.roomHeight * this.scale,
        this.roomLength * this.scale
      );

      firstWall = new THREE.Mesh(firstGeometry, materials);
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
      secondWall = new THREE.Mesh(secondGeometry, materials);
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
      thirdWall = new THREE.Mesh(thirdGeometry, materials);
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
      fouthWall = new THREE.Mesh(fouthGeometry, materials);
      fouthWall.position.set(
        0,
        (this.roomHeight * this.scale) / 2,
        -(this.roomLength * this.scale) / 2
      );
      scene.add(fouthWall);
    },

    /**
     * This is to create floor.
     * @returns void
     */
    createFloor() {
      // floor
      const floorGeometry = new THREE.PlaneGeometry(
        this.roomWidth * this.scale,
        this.roomLength * this.scale
      );
      floorGeometry.rotateX(-Math.PI * 0.5);
      const floorMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.floorColorCode),
        flatShading: true,
      });
      floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.position.set(0, 0.01, 0);
      scene.add(floor);
    },

    /**
     * This is to create door.
     * @returns void
     */
    createDoor() {
      const doorGeometry = new THREE.PlaneGeometry(2, 3);
      const doorMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.frameColor),
        opacity: 0.1,
        transparent: true,
      });
      door = new THREE.Mesh(doorGeometry, doorMaterial);
      door.position.set(
        0,
        (this.roomHeight * this.scale) / 2.7,
        -((this.roomLength - 0.6) * this.scale) / 2
      );
      scene.add(door);
    },

    /**
     * This is to create window.
     * @returns void
     */
    createWindow() {
      const windowGeometry = new THREE.PlaneGeometry(4, 2);
      const windowMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(this.frameColor),
        opacity: 0.1,
        transparent: true,
      });
      windowFrame = new THREE.Mesh(windowGeometry, windowMaterial);
      windowFrame.rotation.y = Math.PI / 2;
      windowFrame.position.set(
        -((this.roomWidth - 0.6) * this.scale) / 2,
        (this.roomHeight * this.scale) / 2,
        0
      );
      scene.add(windowFrame);
    },

    /**
     * This is to create renderer.
     * @returns void
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
