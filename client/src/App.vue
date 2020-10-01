<template>
  <div>
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
<style>
</style>
