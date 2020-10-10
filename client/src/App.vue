<template>
  <div class="min-size">
    <Nav />
    <Model />
  </div>
</template>

<script>
import Model from "./components/Model.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Model,
    Nav,
  },
};
</script>
<style scoped lang="postcss">
.min-size {
  min-width: 320px;
  min-height: 560px;
}
</style>
