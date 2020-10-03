<template>
  <div class="space-y-1 bar-center top-space">
    <div
      v-for="materialItem in materialItemList"
      :key="materialItem.id"
      class="xs:w-10 xs:h-10 bar-btn w-20 h-20"
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
<style scoped lang="postcss">
.bar-center {
  @apply absolute;
}

.top-space {
  top: 10rem;
}

.bar-img {
  @apply w-full h-full object-contain;
}
.bar-btn {
  @apply cursor-pointer border-solid border-2 border-white bg-white;
}
.bar-btn:hover {
  @apply border-teal-600 bg-gray-400;
}

@media (min-width: 300px) and (max-width: 639px) {
  .top-space {
    top: 7.5rem;
  }
}
</style>