<template>
  <div class="absolute space-x-1 bottom-0 bar-center">
    <div
      v-for="colorItem in colorItemList"
      :key="colorItem.id"
      class="xs:w-10 xs:h-10 inline-block bar-btn w-20 h-20"
      :style="[!colorItem.texture ? { background: `#${colorItem.color}` } : {}]"
      @click="clickColor(colorItem)"
    >
      <img
        v-if="colorItem.texture"
        class="bar-img"
        :class="showFullImage ? 'object-contain' : 'object-cover'"
        :src="getSrc(colorItem.texture)"
        :alt="colorItem.name"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ColorPalette",
  props: ["colorItemList", "showFullImage"],
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
     * This is to handle click event for color.
     * This will alert to parent Model component for color picking up.
     * @param {object} colorItem color item
     * @returns void
     */
    clickColor(colorItem) {
      this.$emit("get-color", colorItem);
    },
  },
};
</script>

<style scoped lang="postcss">
.bar-center {
  left: 50%;
  transform: translateX(-50%);
}
.bar-img {
  @apply w-full h-full;
}
.bar-btn {
  margin: 0px 2px;
  @apply cursor-pointer border-solid border-2 border-white bg-white;
}
.bar-btn:hover {
  @apply border-teal-600 bg-gray-400;
}
</style>