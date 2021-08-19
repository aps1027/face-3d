<template>
  <div class="min-size">
    <Model :roomId="roomId"/>
  </div>
</template>

<script>
import Model from "../components/Model.vue";

export default {
  name: "CreateRoom",
  components: {
    Model,
  },
  data() {
    return {
      roomId: this.$route.params.id
    }
  }
};
</script>
<style scoped lang="postcss">
.min-size {
  min-width: 320px;
  min-height: 560px;
}
</style>
