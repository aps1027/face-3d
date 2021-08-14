<template>
  <div class="center-container">
    <div>
      <h1 class="text-6xl font-bold">Latest Rooms</h1>
      <p>Let's build your desired 3D room based on your idea.</p>
    </div>
    <div class="pt-6 grid grid-cols-3 gap-8 xs:grid-cols-1">
      <div 
      v-for="latestRoom in latestRoomList"
      :key="latestRoom.id"
      class="bg-gray-100 shadow-md rounded p-3">
        <div class="min-size"></div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from "../constants";
import db from "../firebase/Firestore";
export default {
  name: "ShowRoom",
  components: {},
  data() {
    return {
      latestRoomList: [],
    };
  },
  async beforeMount() {
    const latestRoomList = [];
    const snapshot = await db
      .collection(constants.FIREBASE.DB_NAME.ROOM)
      .orderBy("modifiedAt", "desc")
      .limit(constants.LATEST_ROOM_COUNT)
      .get();
    snapshot.forEach((doc) => {
      let room = doc.data();
      room["id"] = doc.id;
      latestRoomList.push(room);
    });
    this.latestRoomList = latestRoomList;
    console.log(this.latestRoomList);
  },
};
</script>
<style scoped lang="postcss">
.center-container {
  top: 50px;
  right: 50%;
  transform: translate(50%, 0%);
  position: absolute;
  text-align: center;
  width: 85%;
}

.min-size {
  max-width: 100%;
  min-height: 250px;
}
</style>
