<template>
  <div class="space-y-1 bar-center">
    <div
      v-for="model in Object.values(uploadedModelMap)"
      :key="model.id"
      @click="clickObjectIcon(model)"
      class="bar-btn"
    >
      <img class="bar-img" :src="getSrc(model.icon)" />
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
    clickObjectIcon(objectItem) {
      this.$emit("get-object", objectItem);
    },
  },
};
</script>
<style scoped>
.bar-center {
  @apply absolute;
  @apply right-0;
  top: 40%;
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