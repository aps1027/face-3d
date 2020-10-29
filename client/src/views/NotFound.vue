<template>
  <div class="center-container">
    <div>
      <h1 class="text-6xl font-bold">Oops!</h1>
      <p>It looks like the page you're looking for doesn't exist.</p>
    </div>
    <div class="pt-6">
      <router-link
        to="/"
        class="m-1 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
        >Go Back Home</router-link
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