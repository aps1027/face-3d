<template>
  <div>
    <RoomDimension
      v-if="!roomId && !roomDimension"
      @get-room-dimension="getRoomDimension"
    />
    <RoomSubmit
      v-if="showRoomSubmit"
      @get-room-detail="getRoomDetail"
      @cancel-room-detail="cancelRoomDetail"
    />
    <ProgressLoading v-if="showLoading" />
    <SideTabBar @get-switch="getSwitch" />
    <ObjectSideBar
      :uploadedModelMap="uploadedModelMap"
      @get-object="getObject"
    />
    <Object3D :modelList="modelList" @get-model="getModel" />
    <ColorPalette
      v-if="switchItem"
      :colorItemList="colorList"
      :showFullImage="showFullImage"
      @get-color="getColor"
    />
    <div
      v-if="selectedObj && !hideAdjustmentPanel"
      class="panel-right panel-box"
    >
      <div class="text-center md:text-left">
        <div class="font-bold">
          <span>Adjust {{ capitalizeString(selectedObj.name) }} Model</span>
          <button @click="clickAdjustmentCrossIcon" class="absolute cross-btn">
            <span>&#10005;</span>
          </button>
        </div>
        <hr />

        <div class="mt-1 flex items-center">
          <label for="x-axis" class="inline-block w-16">X-axis</label>
          <input
            class="range-bar mx-5"
            name="x-axis"
            type="range"
            step="0.01"
            :min="range.x.min"
            :max="range.x.max"
            v-model="adjustmentResult.position.x"
          />
        </div>
        <div class="mt-1">
          <label for="z-axis" class="inline-block w-16">Z-axis</label>
          <input
            class="range-bar mx-5"
            name="z-axis"
            type="range"
            step="0.01"
            :min="range.z.min"
            :max="range.z.max"
            v-model="adjustmentResult.position.z"
          />
        </div>
        <div class="mt-1">
          <label for="rotation" class="inline-block w-16">Rotation</label>
          <input
            class="range-bar mx-5"
            name="z-axis"
            type="range"
            step="0.01"
            min="-6"
            max="6"
            v-model="adjustmentResult.rotation.y"
          />
        </div>
      </div>
    </div>
    <div v-if="selectedObj && !hideColorPanel" class="panel-left panel-box">
      <div class="text-center md:text-left">
        <div class="font-bold">
          <span
            >Customize {{ capitalizeString(selectedObj.name) }} Model
            Design</span
          >
          <button @click="clickColorCrossIcon" class="absolute cross-btn">
            <span>&#10005;</span>
          </button>
        </div>
        <hr />
        <div
          v-for="design in modelDesign"
          :key="design.name"
          class="mt-1 flex items-center"
          style="height: 25px"
        >
          <label class="inline-block w-16">{{
            capitalizeString(design.name)
          }}</label>
          <div class="inline-block">
            <div
              v-for="color in design.colorList"
              :key="color.id"
              class="color-btn"
              @click="changeModelColor(design, color)"
            >
              <img
                class="h-full"
                :src="getSrc(color.texture)"
                :alt="color.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="xs:w-12 xs:h-12 xs:p-1 xs:py-3 fix-save-btn save-btn text-center w-20 h-20 p-4 py-6 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white border border-teal-500 hover:border-transparent"
      @click="saveModel()"
    >
      SAVE
    </div>
    <div ref="container" class="w-screen h-screen min-size"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SideTabBar from "./SideTabBar.vue";
import ColorPalette from "./ColorPalette.vue";
import ObjectSideBar from "./ObjectSideBar.vue";
import Object3D from "./3DObject.vue";
import ProgressLoading from "./ProgressLoading.vue";
import RoomDimension from "./RoomDimension.vue";
import RoomSubmit from "./RoomSubmit.vue";
import db from "../firebase/Firestore";
import storage from "../firebase/Firestorage";
import router from "../router";
import constants from "../constants";

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
let roomGroup;
let door;
let windowFrame;
let bedModel;
let sofaModel;
let tableModel;
let cabinetModel;
let chairModel;

let commonWallMaterial;
let rotateRoom = true;

export default {
  props: ["roomId"],
  components: {
    SideTabBar,
    ColorPalette,
    Object3D,
    ObjectSideBar,
    ProgressLoading,
    RoomDimension,
    RoomSubmit,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      sceneBGColorCode: "#efefef",
      wallColorCode: "#ffffff",
      floorColorCode: "#ffffff",
      frameColor: "#2C3E50",
      roomLength: 15,
      roomWidth: 15,
      roomHeight: 8,
      thinkness: 0.5,
      scale: 0.5,
      colorList: [],
      modelList: [],
      switchItem: null,
      uploadedModelMap: {},
      hideAdjustmentPanel: true,
      hideColorPanel: true,
      selectedObj: null,
      showRoomSubmit: false,
      roomName: "",

      // saved data
      roomDimension: null,
      range: {
        x: {
          min: 0,
          max: 0,
        },
        z: {
          min: 0,
          max: 0,
        },
      },
      adjustmentResult: {
        position: {},
        rotation: {},
      },
      modelDesign: [],
      showLoading: false,
      // saved data

      materialItemsInfo: {
        wall: null,
        floor: null,
        door: null,
        window: null,
      },

      // saved data
      modelsInfo: {
        bed: {},
        sofa: {},
        table: {},
        cabinet: {},
        chair: {},
      },
    };
  },
  computed: {
    /**
     * This is to show full image in color palette component.
     * @returns true or false
     */
    showFullImage() {
      return ["window", "door"].includes(this.switchItem.name);
    },
    /**
     * This is to get image source.
     * @param {string} imgPath image path
     * @returns image
     */
    getSrc() {
      return (imgPath) => require("../assets/" + imgPath);
    },
    /**
     * This is to capitalize string.
     * @param {string} text text
     * @returns capitalized string
     */
    capitalizeString() {
      return (text) => text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
  watch: {
    adjustmentResult: {
      deep: true,
      handler() {
        this.setModelAdjustment(this.selectedObj.name, this.adjustmentResult);
        const tmpResult = {
          position: {
            x: this.adjustmentResult.position.x,
            z: this.adjustmentResult.position.z,
          },
          rotation: {
            y: this.adjustmentResult.rotation.y,
          },
        };
        this.modelsInfo[this.selectedObj.name]["adjustmentResult"] = tmpResult;
      },
    },
    roomDimension: {
      deep: true,
      handler() {
        rotateRoom = !this.roomDimension;
        this.roomLength = this.roomDimension.length;
        this.roomWidth = this.roomDimension.width;

        let tmpGroup = scene.getObjectByName("room-group");
        if (tmpGroup) {
          scene.remove(tmpGroup);
        }
        this.createWalls();
        this.createFloor();
        this.createDoor();
        this.createWindow();
        this.groupInitRoomItems();
      },
    },
    materialItemsInfo: {
      deep: true,
      handler() {
        if (this.materialItemsInfo.wall) {
          this.changeWallColor(this.materialItemsInfo.wall);
        }
        if (this.materialItemsInfo.floor) {
          this.changeFloorColor(this.materialItemsInfo.floor);
        }
        if (this.materialItemsInfo.door) {
          this.changeDoor(this.materialItemsInfo.door);
        }
        if (this.materialItemsInfo.window) {
          this.changeWindow(this.materialItemsInfo.window);
        }
      },
    },
  },
  methods: {
    /**
     * This is cancelling room detail submit.
     * @param Object obj
     */
    cancelRoomDetail(obj) {
      this.showRoomSubmit = obj.showRoomSubmit;
    },

    /**
     * Getting room detail and save room.
     * @param Object room
     */
    getRoomDetail(room) {
      this.showRoomSubmit = false;
      this.roomName = room.name;
      if (this.roomName) {
        const room = {
          name: this.roomName,
          dimension: this.roomDimension,
          materialItems: this.materialItemsInfo,
          models: this.modelsInfo,
          createdAt: Date.now(),
          modifiedAt: Date.now(),
        };
        this.showLoading = true;

        // reset room position
        controls.reset();
        camera.aspect = 972 / 657;
        camera.updateProjectionMatrix();
        renderer.setSize(972, 657);
        camera.position.set(7.13, 5.35, 7);
        setTimeout(() => {
          const imgData = renderer.domElement
            .toDataURL("image/png")
            .split(",")[1];
          storage
            .ref(constants.FIREBASE.STORAGE_PATH.ROOM)
            .child(`room_${Date.now()}.png`)
            .putString(imgData, "base64")
            .then((snapshot) => {
              snapshot.ref.getDownloadURL().then((url) => {
                room["imageUrl"] = url;
                db.collection(constants.FIREBASE.DB_NAME.ROOM)
                  .add(room)
                  .then(() => {
                    router.push({ name: "ShowRoom" });
                  });
              });
            });
        }, 1);
      }
    },
    /**
     * This is to save room model information into firebase.
     * @returns show room submit form
     */
    saveModel() {
      this.showRoomSubmit = true;
    },

    /**
     * This is to set model adjustment (e.g. x,y, rotation).
     * @param {string} modelName model name (e.g. bed, sofa)
     * @param {object} adjustmentResult adjustmentResult (e.g. x,y, rotation)
     */
    setModelAdjustment(modelName, adjustmentResult) {
      if (modelName == "bed") {
        bedModel.position.x = adjustmentResult.position.x;
        bedModel.position.z = adjustmentResult.position.z;
        bedModel.rotation.y = adjustmentResult.rotation.y;
      } else if (modelName == "sofa") {
        sofaModel.position.x = adjustmentResult.position.x;
        sofaModel.position.z = adjustmentResult.position.z;
        sofaModel.rotation.y = adjustmentResult.rotation.y;
      } else if (modelName == "table") {
        tableModel.position.x = adjustmentResult.position.x;
        tableModel.position.z = adjustmentResult.position.z;
        tableModel.rotation.y = adjustmentResult.rotation.y;
      } else if (modelName == "cabinet") {
        cabinetModel.position.x = adjustmentResult.position.x;
        cabinetModel.position.z = adjustmentResult.position.z;
        cabinetModel.rotation.y = adjustmentResult.rotation.y;
      } else if (modelName == "chair") {
        chairModel.position.x = adjustmentResult.position.x;
        chairModel.position.z = adjustmentResult.position.z;
        chairModel.rotation.y = adjustmentResult.rotation.y;
      }
    },
    /**
     * This is to change model color or design.
     * @param {object} design design object including mesh names and color list
     * @param {object} color specific color to change
     * @returns void
     */
    changeModelColor(design, color) {
      this.modelsInfo[this.selectedObj.name][design.name] = color;
      let model = null;
      if (this.selectedObj.name == "bed") {
        model = bedModel;
      } else if (this.selectedObj.name == "sofa") {
        model = sofaModel;
      } else if (this.selectedObj.name == "table") {
        model = tableModel;
      } else if (this.selectedObj.name == "cabinet") {
        model = cabinetModel;
      } else if (this.selectedObj.name == "chair") {
        model = chairModel;
      }
      this.setModelMaterial(model, this.selectedObj.name, design.name, color);
    },
    /**
     * This is to set new model material.
     * @param {object} model specific model to change design
     * @param {object} modelName model name
     * @param {object} partName part name
     * @param {object} color specific color to change
     * @returns void
     */
    setModelMaterial(model, modelName, partName, color) {
      const uploadModel = this.uploadedModelMap[modelName].model.color.find(
        (color) => color.name === partName
      );
      const meshNameList = uploadModel ? uploadModel.meshNameList : [];
      model.traverse((o) => {
        let texture = new THREE.TextureLoader().load(
          this.getSrc(color.texture)
        );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(color.size[0], color.size[1]);
        let material = new THREE.MeshStandardMaterial({
          flatShading: true,
          map: texture,
        });

        if (o.isMesh && meshNameList.includes(o.name)) {
          o.material = material;
        }
      });
    },
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
        this.materialItemsInfo.wall = colorItem;
      } else if (this.switchItem.name == "floor") {
        this.materialItemsInfo.floor = colorItem;
      } else if (this.switchItem.name == "door") {
        this.materialItemsInfo.door = colorItem;
      } else if (this.switchItem.name == "window") {
        this.materialItemsInfo.window = colorItem;
      }
    },

    /**
     * This is to get specific model (i.e. bed, sofa, etc).
     * @param {object} modelItem specific model
     * @returns void
     */
    getModel(modelItem) {
      this.hideAdjustmentPanel = true;
      this.hideColorPanel = true;
      if (modelItem.name == "bed") {
        this.uploadBedModel(modelItem.model);
        this.addUploadedModel(modelItem);
      } else if (modelItem.name == "sofa") {
        this.uploadSofaModel(modelItem.model);
        this.addUploadedModel(modelItem);
      } else if (modelItem.name == "table") {
        this.uploadTableModel(modelItem.model);
        this.addUploadedModel(modelItem);
      } else if (modelItem.name == "cabinet") {
        this.uploadCabinetModel(modelItem.model);
        this.addUploadedModel(modelItem);
      } else if (modelItem.name == "chair") {
        this.uploadChairModel(modelItem.model);
        this.addUploadedModel(modelItem);
      }
    },
    /**
     * This is to get selected object or model.
     * @param {object} obj selected object
     * @returns void
     */
    getObject(obj) {
      this.selectedObj = obj;
      if (this.selectedObj && this.selectedObj.name == "bed") {
        this.adjustmentResult.position.x = bedModel.position.x;
        this.adjustmentResult.position.z = bedModel.position.z;
        this.adjustmentResult.rotation.y = bedModel.rotation.y;
      } else if (this.selectedObj && this.selectedObj.name == "sofa") {
        this.adjustmentResult.position.x = sofaModel.position.x;
        this.adjustmentResult.position.z = sofaModel.position.z;
        this.adjustmentResult.rotation.y = sofaModel.rotation.y;
      } else if (this.selectedObj && this.selectedObj.name == "table") {
        this.adjustmentResult.position.x = tableModel.position.x;
        this.adjustmentResult.position.z = tableModel.position.z;
        this.adjustmentResult.rotation.y = tableModel.rotation.y;
      } else if (this.selectedObj && this.selectedObj.name == "cabinet") {
        this.adjustmentResult.position.x = cabinetModel.position.x;
        this.adjustmentResult.position.z = cabinetModel.position.z;
        this.adjustmentResult.rotation.y = cabinetModel.rotation.y;
      } else if (this.selectedObj && this.selectedObj.name == "chair") {
        this.adjustmentResult.position.x = chairModel.position.x;
        this.adjustmentResult.position.z = chairModel.position.z;
        this.adjustmentResult.rotation.y = chairModel.rotation.y;
      }

      let range = {
        x: {
          min: -(this.roomWidth * this.scale) / 2,
          max: (this.roomWidth * this.scale) / 2,
        },
        z: {
          min: -(this.roomLength * this.scale) / 2,
          max: (this.roomLength * this.scale) / 2,
        },
      };
      this.range = range;

      // color design panel
      this.modelDesign = this.selectedObj.model.color;
      this.hideAdjustmentPanel = false;
      this.hideColorPanel = false;
    },

    /**
     * This is to add upload model to uploaded model map.
     * @param {object} modelItem model item info
     * @returns void
     */
    addUploadedModel(modelItem) {
      this.uploadedModelMap[modelItem.name] = modelItem;
      this.modelsInfo[modelItem.name]["id"] = modelItem.model.id;
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
     * This is to get room dimensions.
     * @param {object} dimension (width and length)
     * @returns void
     */
    getRoomDimension(dimension) {
      this.roomDimension = dimension;
    },

    /**
     * This is to handle for clicking adjustment cross icon.
     * @returns void
     */
    clickAdjustmentCrossIcon() {
      this.hideAdjustmentPanel = true;
    },

    /**
     * This is to handle for clicking Color cross icon.
     * @returns void
     */
    clickColorCrossIcon() {
      this.hideColorPanel = true;
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
      this.groupInitRoomItems();
      this.createRenderer();

      controls.update();
      /**
       * This is animation function.
       */
      const animate = function() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        if (rotateRoom) roomGroup.rotation.y += 0.021;
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

      camera.add(ambientLight, mainLight);
      scene.add(camera);
    },

    /**
     * This is to upload bed model.
     * @param {object} bedItem bed item
     * @param {boolean} showLoading loading hide or show
     * @returns void
     */
    uploadBedModel(bedItem, showLoading = false) {
      this.showLoading = true;
      let tmpBedModel = scene.getObjectByName("bed");
      if (tmpBedModel) {
        scene.remove(tmpBedModel);
      }
      let loaders = new GLTFLoader();

      loaders.load(
        `${this.publicPath}${bedItem.model}`,
        (gltf) => {
          bedModel = gltf.scene;
          bedModel.name = "bed";
          bedModel.traverse((o) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });

          // Set the models initial scale
          bedModel.scale.set(bedItem.size[0], bedItem.size[1], bedItem.size[2]);
          if (!tmpBedModel) {
            bedModel.rotation.y = Math.PI / 2;
            // Offset the y position a bit
            bedModel.position.x = bedItem.position[0];
            bedModel.position.y = bedItem.position[1];
            bedModel.position.z = bedItem.position[2];
          } else {
            bedModel.rotation.y = tmpBedModel.rotation.y;
            bedModel.position.x = tmpBedModel.position.x;
            bedModel.position.y = bedItem.position[1];
            bedModel.position.z = tmpBedModel.position.z;
          }
          // Add the model to the scene
          scene.add(bedModel);
          this.showLoading = showLoading;
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    },
    /**
     * This is to upload sofa model.
     * @param {object} sofaItem sofa model
     * @param {boolean} showLoading loading hide or show
     * @returns void
     */
    uploadSofaModel(sofaItem, showLoading = false) {
      this.showLoading = true;
      let tmpSofaModel = scene.getObjectByName("sofa");
      if (tmpSofaModel) {
        scene.remove(tmpSofaModel);
      }
      let loaders = new GLTFLoader();

      loaders.load(
        `${this.publicPath}${sofaItem.model}`,
        (gltf) => {
          sofaModel = gltf.scene;
          sofaModel.name = "sofa";
          sofaModel.traverse((o) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });

          // Set the models initial scale
          sofaModel.scale.set(
            sofaItem.size[0],
            sofaItem.size[1],
            sofaItem.size[2]
          );
          if (!tmpSofaModel) {
            sofaModel.rotation.y = Math.PI / 2;
            // Offset the y position a bit
            sofaModel.position.x = sofaItem.position[0];
            sofaModel.position.y = sofaItem.position[1];
            sofaModel.position.z = sofaItem.position[2];
          } else {
            sofaModel.rotation.y = tmpSofaModel.rotation.y;
            sofaModel.position.x = tmpSofaModel.position.x;
            sofaModel.position.y = sofaItem.position[1];
            sofaModel.position.z = tmpSofaModel.position.z;
          }

          // Add the model to the scene
          scene.add(sofaModel);
          this.showLoading = showLoading;
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    },

    /**
     * This is to upload table model.
     * @param {object} tableItem table model
     * @param {boolean} showLoading loading hide or show
     * @returns void
     */
    uploadTableModel(tableItem, showLoading = false) {
      this.showLoading = true;
      let tmpTableModel = scene.getObjectByName("table");
      if (tmpTableModel) {
        scene.remove(tmpTableModel);
      }
      let loaders = new GLTFLoader();

      loaders.load(
        `${this.publicPath}${tableItem.model}`,
        (gltf) => {
          tableModel = gltf.scene;
          tableModel.name = "table";
          tableModel.traverse((o) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });

          // Set the models initial scale
          tableModel.scale.set(
            tableItem.size[0],
            tableItem.size[1],
            tableItem.size[2]
          );
          if (!tmpTableModel) {
            tableModel.rotation.y = Math.PI / 2;
            // Offset the y position a bit
            tableModel.position.x = tableItem.position[0];
            tableModel.position.y = tableItem.position[1];
            tableModel.position.z = tableItem.position[2];
          } else {
            tableModel.rotation.y = tmpTableModel.rotation.y;
            tableModel.position.x = tmpTableModel.position.x;
            tableModel.position.y = tableItem.position[1];
            tableModel.position.z = tmpTableModel.position.z;
          }

          // Add the model to the scene
          scene.add(tableModel);
          this.showLoading = showLoading;
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    },

    /**
     * This is to upload cabinet model.
     * @param {object} cabinetItem cabinet model
     * @param {boolean} showLoading loading hide or show
     * @returns void
     */
    uploadCabinetModel(cabinetItem, showLoading = false) {
      this.showLoading = true;
      let tmpCabinetModel = scene.getObjectByName("cabinet");
      if (tmpCabinetModel) {
        scene.remove(tmpCabinetModel);
      }
      let loaders = new GLTFLoader();

      loaders.load(
        `${this.publicPath}${cabinetItem.model}`,
        (gltf) => {
          cabinetModel = gltf.scene;
          cabinetModel.name = "cabinet";
          cabinetModel.traverse((o) => {
            if (o.isMesh) {
              if (o.name == "Plane") {
                o.visible = false;
              } else {
                o.castShadow = true;
                o.receiveShadow = true;
              }
            }
          });

          // Set the models initial scale
          cabinetModel.scale.set(
            cabinetItem.size[0],
            cabinetItem.size[1],
            cabinetItem.size[2]
          );
          if (!tmpCabinetModel) {
            cabinetModel.rotation.y = Math.PI / 2;
            // Offset the y position a bit
            cabinetModel.position.x = cabinetItem.position[0];
            cabinetModel.position.y = cabinetItem.position[1];
            cabinetModel.position.z = cabinetItem.position[2];
          } else {
            cabinetModel.rotation.y = tmpCabinetModel.rotation.y;
            cabinetModel.position.x = tmpCabinetModel.position.x;
            cabinetModel.position.y = cabinetItem.position[1];
            cabinetModel.position.z = tmpCabinetModel.position.z;
          }

          // Add the model to the scene
          scene.add(cabinetModel);
          this.showLoading = showLoading;
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    },

    /**
     * This is to upload chair model.
     * @param {object} chairItem chair model
     * @param {boolean} showLoading loading hide or show
     * @returns void
     */
    uploadChairModel(chairItem, showLoading = false) {
      this.showLoading = true;
      let tmpChairModel = scene.getObjectByName("chair");
      if (tmpChairModel) {
        scene.remove(tmpChairModel);
      }
      let loaders = new GLTFLoader();

      loaders.load(
        `${this.publicPath}${chairItem.model}`,
        (gltf) => {
          chairModel = gltf.scene;
          chairModel.name = "chair";
          chairModel.traverse((o) => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
            }
          });

          // Set the models initial scale
          chairModel.scale.set(
            chairItem.size[0],
            chairItem.size[1],
            chairItem.size[2]
          );
          if (!tmpChairModel) {
            chairModel.rotation.y = Math.PI / 2;
            // Offset the y position a bit
            chairModel.position.x = chairItem.position[0];
            chairModel.position.y = chairItem.position[1];
            chairModel.position.z = chairItem.position[2];
          } else {
            chairModel.rotation.y = tmpChairModel.rotation.y;
            chairModel.position.x = tmpChairModel.position.x;
            chairModel.position.y = chairItem.position[1];
            chairModel.position.z = tmpChairModel.position.z;
          }

          // Add the model to the scene
          scene.add(chairModel);
          this.showLoading = showLoading;
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
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
    },

    groupInitRoomItems() {
      roomGroup = new THREE.Group();
      roomGroup.add(firstWall);
      roomGroup.add(secondWall);
      roomGroup.add(thirdWall);
      roomGroup.add(fouthWall);
      roomGroup.add(floor);
      roomGroup.add(windowFrame);
      roomGroup.add(door);
      roomGroup.name = "room-group";
      scene.add(roomGroup);
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
    },

    /**
     * This is to create renderer.
     * @returns void
     */
    createRenderer() {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);

      renderer.setPixelRatio(window.devicePixelRatio);

      renderer.physicallyCorrectLights = true;
      container.appendChild(renderer.domElement);
    },

    /**
     * This is preparation for edited room.
     */
    prepareEditedRoom() {
      if (this.modelsInfo.bed.id) {
        const bedItem = this.modelList.find((item) => item.name == "bed");
        let modelBedItem = {
          id: bedItem.id,
          name: bedItem.name,
          icon: bedItem.icon,
          model: bedItem.list.find((mdl) => mdl.id == this.modelsInfo.bed.id),
        };
        this.uploadBedModel(modelBedItem.model, true);
        this.addUploadedModel(modelBedItem);
      }

      if (this.modelsInfo.table.id) {
        const tableItem = this.modelList.find((item) => item.name == "table");
        let modelTableItem = {
          id: tableItem.id,
          name: tableItem.name,
          icon: tableItem.icon,
          model: tableItem.list.find(
            (mdl) => mdl.id == this.modelsInfo.table.id
          ),
        };
        this.uploadTableModel(modelTableItem.model, true);
        this.addUploadedModel(modelTableItem);
      }

      if (this.modelsInfo.chair.id) {
        const chairItem = this.modelList.find((item) => item.name == "chair");
        let modelChairItem = {
          id: chairItem.id,
          name: chairItem.name,
          icon: chairItem.icon,
          model: chairItem.list.find(
            (mdl) => mdl.id == this.modelsInfo.chair.id
          ),
        };
        this.uploadChairModel(modelChairItem.model, true);
        this.addUploadedModel(modelChairItem);
      }

      if (this.modelsInfo.cabinet.id) {
        const cabinetItem = this.modelList.find(
          (item) => item.name == "cabinet"
        );
        let modelCabinetItem = {
          id: cabinetItem.id,
          name: cabinetItem.name,
          icon: cabinetItem.icon,
          model: cabinetItem.list.find(
            (mdl) => mdl.id == this.modelsInfo.cabinet.id
          ),
        };
        this.uploadCabinetModel(modelCabinetItem.model, true);
        this.addUploadedModel(modelCabinetItem);
      }

      if (this.modelsInfo.sofa.id) {
        const sofaItem = this.modelList.find((item) => item.name == "sofa");
        let modelSofaItem = {
          id: sofaItem.id,
          name: sofaItem.name,
          icon: sofaItem.icon,
          model: sofaItem.list.find((mdl) => mdl.id == this.modelsInfo.sofa.id),
        };
        this.uploadSofaModel(modelSofaItem.model, true);
        this.addUploadedModel(modelSofaItem);
      }

      setTimeout(() => {
        for (let modelName in this.modelsInfo) {
          for (let part in this.modelsInfo[modelName]) {
            if (part === "id") {
              continue;
            }
            if (part === "adjustmentResult") {
              if (this.modelsInfo[modelName][part]) {
                this.setModelAdjustment(
                  modelName,
                  this.modelsInfo[modelName][part]
                );
              }
              continue;
            }
            let model = null;
            if (modelName == "bed") {
              model = bedModel;
            } else if (modelName == "sofa") {
              model = sofaModel;
            } else if (modelName == "table") {
              model = tableModel;
            } else if (modelName == "cabinet") {
              model = cabinetModel;
            } else if (modelName == "chair") {
              model = chairModel;
            }
            this.setModelMaterial(
              model,
              modelName,
              part,
              this.modelsInfo[modelName][part]
            );
          }
        }

        this.showLoading = false;
      }, 2000);
    },
  },
  mounted() {
    this.init();
  },
  created() {
    rotateRoom = true;
  },
  async beforeMount() {
    this.showLoading = this.roomId ? true : false;
    const modelList = [];
    const snapshot = await db
      .collection(constants.FIREBASE.DB_NAME.MODEL)
      .get();
    snapshot.forEach((doc) => {
      modelList.push(doc.data()[Object.keys(doc.data())[0]]);
    });
    this.modelList = modelList;

    if (this.roomId) {
      const roomSnap = await db
        .collection(constants.FIREBASE.DB_NAME.ROOM)
        .doc(this.roomId)
        .get();
      if (!roomSnap.exists) {
        router.push({ name: "Home" });
      }
      const roomData = roomSnap.data();

      this.roomDimension = roomData.dimension;
      this.materialItemsInfo = roomData.materialItems;
      this.modelsInfo = roomData.models;

      this.prepareEditedRoom();
    }
  },
};
</script>
<style scoped lang="postcss">
.range-bar {
  width: 10rem;
}
.panel-right {
  @apply absolute;
  top: 5rem;
  right: 90px;
}
.panel-left {
  @apply absolute;
  top: 5rem;
  left: 90px;
}

.panel-box {
  width: 18rem;
  min-height: 10rem;
  @apply p-3 h-40 bg-white opacity-75;
}

.cross-btn {
  right: 10px;
  top: 7px;
  outline: none;
}
.cross-btn:hover {
  @apply text-teal-600;
}

.color-btn {
  @apply cursor-pointer inline-block w-6 h-6 object-cover border-solid border-2 border-white;
}
.color-btn:hover {
  @apply border-teal-600;
}
.min-size {
  min-width: 320px;
  min-height: 560px;
}

.fix-save-btn {
  @apply absolute;
  bottom: 3rem;
  right: 6rem;
}

.save-btn {
  @apply cursor-pointer rounded-full;
  font-size: 19px;
  font-weight: bolder;
  color: #319795;
}

@media (min-width: 300px) and (max-width: 639px) {
  .panel-left {
    left: 50%;
    transform: translateX(-50%);
    bottom: 6.5rem;
    top: auto;
  }
  .panel-right {
    right: 50%;
    transform: translateX(50%);
  }
  .save-btn {
    font-size: 14px;
    right: 2rem;
  }
}
</style>
