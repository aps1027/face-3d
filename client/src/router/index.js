import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import CreateRoom from "../views/CreateRoom.vue";
import ShowRoom from "../views/ShowRoom.vue";
import EditRoom from "../views/EditRoom.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/room/create",
    name: "CreateRoom",
    component: CreateRoom,
  },
  {
    path: "/room",
    name: "ShowRoom",
    component: ShowRoom,
  },
  {
    path: "/room/:id/edit",
    name: "EditRoom",
    component: EditRoom,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
