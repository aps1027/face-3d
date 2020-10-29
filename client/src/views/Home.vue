<template>
  <div class="center-container">
    <div>
      <h1 class="text-6xl font-bold">Welcome!</h1>
      <p>Let's build your desired 3D room based on your idea.</p>
    </div>
    <div class="pt-6">
      <router-link
        to="/create-room"
        class="m-1 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded"
        >New room</router-link
      >
      <router-link
        to="/"
        class="m-1 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
        >Already have one</router-link
      >
    </div>
  </div>
</template>
<style scoped lang="postcss">
.center-container {
  top: 42%;
  right: 50%;
  transform: translate(50%, -50%);
  position: absolute;
  text-align: center;
}
</style>