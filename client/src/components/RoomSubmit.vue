<template>
  <div class="w-screen h-screen absolute z-50 bg-gray-500 bg-opacity-75">
    <div class="room-form">
      <div class="w-full max-w-xs">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-6 bg-opacity-75"
          @submit.prevent="sendRoomDetail"
        >
          <div>
            <p class="text-center font-bold text-2xl pb-2">Room Detail</p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-900 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              :class="!isNameValid ? 'border-red-500' : ''"
              placeholder="Please input room name"
              v-model="name"
            />
            <p v-if="!isNameValid" class="text-red-500 text-xs italic pt-1">
              Room name is required.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="w-6/12 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3 border border-teal-500"
              type="submit"
            >
              Submit
            </button>
            <button
              @click="clickCancel"
              class="w-6/12 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
          <p class="text-center text-gray-500 text-xs pt-4">
            Powered by face3d
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      isNameValid: true,
    };
  },
  methods: {
    /**
     * This is to send room name.
     * @returns void
     */
    sendRoomDetail() {
      this.isNameValid = this.name.trim() ? true : false;
      this.isNameValid &&
        this.$emit("get-room-detail", {
          name: this.name,
        });
    },

    /**
     * Cancelling to submit.
     * @returns void
     */
    clickCancel() {
      this.$emit("cancel-room-detail", {
        showRoomSubmit: false,
      });
    },
  },
};
</script>
<style scoped>
.room-form {
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%);
  position: absolute;
  width: 300px;
  height: 300px;
}
</style>
