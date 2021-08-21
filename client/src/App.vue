<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";

if (process.env.VUE_APP_DEPLOY_ID) {
  let deployId = localStorage.getItem("DEPLOY_ID");
  if (deployId !== process.env.VUE_APP_DEPLOY_ID) {
    window.history.forward(1);
  }
  localStorage.setItem("DEPLOY_ID", process.env.VUE_APP_DEPLOY_ID);
}
export default {
  name: "app",
  components: {
    Nav,
  },
};
</script>
