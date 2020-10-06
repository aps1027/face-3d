<template>
  <div class="space-y-1 bar-center">
    <div
      v-for="model in Object.values(uploadedModelMap)"
      :key="model.id"
      @click="clickObjectIcon(model)"
      class="xs:w-10 xs:h-10 bar-btn w-20 h-20"
    >
      <img class="bar-img" :src="getSrc(model.icon)" :alt="model.name" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ObjectSideBar",
  props: ["uploadedModelMap"],
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
     * This is to handle for clicking object icon.
     * This will alert and send the selected object to parent component.
     * @param {object} objectItem object item
     * @returns void
     */
    clickObjectIcon(objectItem) {
      this.$emit("get-object", objectItem);
    },
  },
};
</script>
<style scoped lang="postcss">
.bar-center {
  @apply absolute right-0;
  top: 5rem;
}
.bar-img {
  @apply w-full h-full object-contain;
}
.bar-btn {
  @apply cursor-pointer border-solid border-2 border-white bg-white;
}
.bar-btn:hover {
  @apply border-teal-600;
  @apply bg-gray-400;
}
</style>