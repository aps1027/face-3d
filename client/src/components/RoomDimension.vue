<template>
  <div class="w-screen h-screen absolute z-50 bg-gray-500 bg-opacity-75">
    <div class="wide-form">
      <div class="w-full max-w-xs">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-6 bg-opacity-75"
          @submit.prevent="sendRoomDimension"
        >
          <div>
            <p class="text-center font-bold text-2xl pb-2">Room Dimension</p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-900 text-sm font-bold mb-2"
              for="length"
            >
              Length
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="length"
              type="text"
              :class="!isRoomLengthValid ? 'border-red-500' : ''"
              placeholder="Please input length in feet"
              v-model="roomLength"
            />
            <p
              v-if="!isRoomLengthValid"
              class="text-red-500 text-xs italic pt-1"
            >
              Please input between {{ roomLengthRange[0] }} and
              {{ roomLengthRange[1] }}.
            </p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-900 text-sm font-bold mb-2"
              for="width"
            >
              Width
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="width"
              type="text"
              :class="!isRoomWidthValid ? 'border-red-500' : ''"
              placeholder="Please input width in feet"
              v-model="roomWidth"
            />
            <p
              v-if="!isRoomWidthValid"
              class="text-red-500 text-xs italic pt-1"
            >
              Please input between {{ roomWidthRange[0] }} and
              {{ roomWidthRange[1] }}.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="w-6/12 mr-3 bg-teal-600 hover:bg-transparent hover:text-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-teal-500"
              type="submit"
            >
              Submit
            </button>
            <button
              @click="clickCancel"
              class="w-6/12 bg-transparent hover:bg-teal-500 text-teal-600 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded  focus:outline-none focus:shadow-outline"
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
      roomWidth: "",
      roomLength: "",
      isRoomWidthValid: true,
      isRoomLengthValid: true,
      roomWidthRange: [15, 20],
      roomLengthRange: [15, 25],
    };
  },
  methods: {
    /**
     * This is to get validation ranges for user inputs.
     * @param {array} array array of range
     * @returns rangeList
     */
    getRanges(array) {
      let tmpRange = [];
      for (let start = array[0]; start <= array[1]; start++) {
        tmpRange.push(start);
      }
      return tmpRange;
    },
    /**
     * This is to send room dimension to parent component.
     * @returns void
     */
    sendRoomDimension() {
      this.isRoomWidthValid = this.getRanges(this.roomWidthRange)
        .map((width) => "" + width)
        .includes(this.roomWidth);
      this.isRoomLengthValid = this.getRanges(this.roomLengthRange)
        .map((length) => "" + length)
        .includes(this.roomLength);
      if (this.isRoomWidthValid && this.isRoomLengthValid) {
        this.$emit("get-room-dimension", {
          width: this.roomWidth,
          length: this.roomLength,
        });
      }
    },

    /**
     * Cancelling to submit.
     * @returns void
     */
    clickCancel() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.wide-form {
  top: 45%;
  right: 50%;
  transform: translate(50%, -50%);
  position: absolute;
  width: 300px;
  height: 300px;
}
</style>
