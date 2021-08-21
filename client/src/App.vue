<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";

console.log("Netlify DEPLOY_ID");
console.log(process.env.VUE_APP_FIREBASE_PROJECT_ID);
export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>
