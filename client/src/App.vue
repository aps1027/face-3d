<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";

console.log("Netlify DEPLOY_ID");
console.log(process.env.DEPLOY_ID);
export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>
