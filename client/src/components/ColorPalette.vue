<template>
  <div class="space-x-1 bar-center">
    <div
      v-for="colorItem in colorItemList"
      :key="colorItem.id"
      class="inline-block bar-btn"
      :style="[!colorItem.texture ? { background: `#${colorItem.color}` } : {}]"
      @click="clickColor(colorItem)"
    >
      <img
        v-if="colorItem.texture"
        class="bar-img"
        :src="getSrc(colorItem.texture)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ColorPalette",
  props: ["colorItemList"],
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

<style scoped>
.bar-center {
  @apply absolute;
  @apply bottom-0;
  left: 50%;
  transform: translateX(-50%);
}
.bar-img {
  @apply w-full;
  @apply h-full;
  @apply object-cover;
}
.bar-btn {
  @apply cursor-pointer;
  @apply border-solid;
  @apply border-2;
  @apply border-white;
  @apply bg-white;
  @apply w-20;
  @apply h-20;
}
.bar-btn:hover {
  @apply border-teal-600;
  @apply bg-gray-400;
}
</style>