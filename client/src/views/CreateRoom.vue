<template>
  <div class="min-size">
    <Model />
  </div>
</template>

<script>
import Model from "../components/Model.vue";

export default {
  name: "CreateRoom",
  components: {
    Model,
  },
};
</script>
<style scoped lang="postcss">
.min-size {
  min-width: 320px;
  min-height: 560px;
}
</style>
