<template>
  <div class="center-container">
    <div>
      <h1 class="text-6xl font-bold leading-none">Latest Rooms</h1>
      <p>Let's build your desired 3D room based on your idea.</p>
    </div>
    <div class="pt-6 grid grid-cols-3 gap-8 xs:grid-cols-1">
      <div
        v-for="latestRoom in latestRoomList"
        :key="latestRoom.id"
        class="relative room-card"
        style="background: #efefef;"
      >
        <div class="bg-teal-600 absolute w-full text-white text-left p-2">
          {{ latestRoom.name }}
        </div>
        <div class="min-size">
          <img :src="latestRoom.imageUrl" alt="Room image" />
        </div>
        <a :href="prepareEditRoute(latestRoom.id)" class="edit-btn">Edit&#8594;</a>
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
  computed: {
    /**
     * This is to prepare edit route.
     * @returns {string} route
     */
    prepareEditRoute() {
      return (id) => `/room/${id}/edit`;
    },
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
  },
};
</script>
<style scoped lang="postcss">
.center-container {
  top: 17%;
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

.min-size img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.edit-btn {
  color: teal;
  font-size: 18px;
  position: absolute;
  height: 30px;
  bottom: 5px;
  cursor: pointer;
  right: 20px;
}
.edit-btn:hover {
  opacity: 0.5;
}
</style>
