<template>
  <div class="space-y-1 bar-center">
    <div
      v-for="materialItem in materialItemList"
      :key="materialItem.id"
      class="bar-btn"
      @click="clickSwitch(materialItem)"
    >
      <img class="bar-img" :src="getSrc(materialItem.icon)" />
    </div>
  </div>
</template>
<script>
import constants from "../constants";
export default {
  name: "SideTabBar",
  data() {
    return {
      imagePrefix: constants.IMAGE_PREFIX,
      materialItemList: constants.MATERIAL_ITEM_LIST,
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
     * This is to handle material item switch.
     * This will alert to parent Model component for switching material items.
     * @param {object} materialItem material item
     * @returns void
     */
    clickSwitch(materialItem) {
      this.$emit("get-switch", materialItem);
    },
  },
};
</script>
<style scoped>
.bar-center {
  @apply absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bar-img {
  @apply w-full;
  @apply h-full;
  @apply object-contain;
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