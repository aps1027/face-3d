<template>
  <div class="w-screen h-screen absolute z-50 bg-gray-500 opacity-75">
    <div class="wide-form">
      <div class="w-full max-w-xs">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-6"
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
              placeholder="Please input length in feet"
              v-model="roomLength"
            />
            <p
              v-if="!isRoomLengthValid"
              class="text-red-500 text-xs italic pt-1"
            >
              Please input within {{ roomLengthRange[0] }} and
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
              placeholder="Please input width in feet"
              v-model="roomWidth"
            />
            <p
              v-if="!isRoomWidthValid"
              class="text-red-500 text-xs italic pt-1"
            >
              Please input within {{ roomWidthRange[0] }} and
              {{ roomWidthRange[1] }}.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
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