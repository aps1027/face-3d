<template>
  <div class="w-screen h-screen absolute z-50 bg-gray-500 opacity-50">
    <div
      class="loader"
    >
      {{ progress }}%
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgressLoading",
  props: ["progress"],
};
</script>
<style scoped lang="postcss">
.loader {
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  width: 100px;
  background: white;
  height: 100px;
  text-align: center;
  border-radius: 50px;
  padding: 30px 0px;
  font-size: 26px;
}
</style>