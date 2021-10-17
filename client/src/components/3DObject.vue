<template>
  <div class="fix-object plus-btn">
    <img class="bar-img" src="../assets/images/icons/plus_icon.png" />
  </div>
</template>
<script>
export default {
  name: "Object3D",
};
</script>
<style scoped>
.fix-object {
  @apply fixed;
  top: 80%;
  right: 10%;
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