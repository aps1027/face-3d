<template>
  <div>
    <div class="fix-object plus-btn" @click="closeModal = false">
      <img class="dialog-img" :src="getSrc('images/icons/plus_icon.png')" />
    </div>
    <main
      v-if="!closeModal"
      class="w-full absolute antialiased bg-opacity-25 bg-gray-200 text-gray-900 font-semibold overflow-x-hidden"
    >
      <div
        class="relative px-4 min-h-screen md:flex md:items-center md:justify-center"
      >
        <div
          class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"
        ></div>
        <div
          class="bg-gray-200 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative"
        >
          <div class="md:flex items-center">
            <div class="text-center md:text-left">
              <p class="font-bold">
                <span v-if="!selectedModel">Select Object Model</span>
                <span v-else
                  >Select {{ capitalizeString(selectedModel.name) }} Model</span
                >
              </p>
              <hr />
              <div v-if="!selectedModel" class="space-x-1 bar-center">
                <div
                  class="dialog-item"
                  v-for="model in modelList"
                  :key="model.id"
                  @click="selectModel(model)"
                >
                  <img
                    v-if="!model.icon"
                    class="dialog-img opacity-75 p-4"
                    :src="getSrc('images/icons/plus_icon.png')"
                  />
                  <img
                    v-else
                    class="dialog-img opacity-75"
                    :src="getSrc(model.icon)"
                  />
                </div>
              </div>
              <div v-else>
                <div
                  class="model-item"
                  v-for="model in selectedModel.list"
                  :key="model.id"
                  @click="selectSpecificModel(model)"
                >
                  <img
                    v-if="!model.image"
                    class="dialog-img opacity-75"
                    :src="getSrc('images/icons/plus_icon.png')"
                  />
                  <img
                    v-else
                    class="dialog-img opacity-75"
                    :src="getSrc(model.image)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center md:text-right md:flex md:justify-end">
            <a
              @click="
                closeModal = true;
                selectedModel = null;
              "
              class="border-2 border-white hover:border-teal-600 hover:bg-gray-400 block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-white rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "Object3D",
  props: ["modelList"],
  data() {
    return {
      closeModal: true,
      selectedModel: null,
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
    /**
     * This is to capitalize string.
     * @param {string} text text
     * @returns capitalized string
     */
    capitalizeString() {
      return (text) => text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
  methods: {
    /**
     * This is to handle for selecting model.
     * @param {object} model model
     * @returns void
     */
    selectModel(model) {
      if (!model.list.length) {
        this.selectedModel = null;
        alert(`There is no uploaded models for ${model.name}.`);
      } else {
        this.selectedModel = model;
      }
    },
    /**
     * This is to select specific model (i.e. bed or sofa).
     * @param {object} model model
     * @returns void
     */
    selectSpecificModel(model) {
      this.$emit("get-model", {
        id: this.selectedModel.id,
        name: this.selectedModel.name,
        icon: this.selectedModel.icon,
        model: model,
      });
      this.closeModal = true;
      this.selectedModel = null;
    },
  },
};
</script>
<style scoped>
.dialog-img {
  @apply w-full;
  @apply h-full;
  @apply object-contain;
}
.model-item,
.dialog-item {
  @apply m-2;
  @apply inline-block;
  @apply cursor-pointer;
  @apply border-solid;
  @apply border-2;
  @apply border-white;
  @apply bg-white;
  @apply w-20;
  @apply h-20;
}

.dialog-item:hover {
  @apply border-teal-600;
  @apply bg-gray-400;
}

.model-item:hover {
  @apply border-teal-600;
}
.fix-object {
  @apply fixed;
  top: 14%;
  left: 8px;
}

.plus-btn {
  @apply p-3;
  @apply cursor-pointer;
  @apply border-solid;
  @apply border-2;
  @apply border-white;
  @apply bg-white;
  @apply w-16;
  @apply h-16;
  @apply rounded-full;
}

.plus-btn:hover {
  @apply border-teal-600;
  @apply bg-gray-400;
}
</style>