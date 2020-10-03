import { Router, RouterContext } from "./deps.ts";

const router = new Router({prefix: "/api"});
router.get("/", (ctx: RouterContext) => {
  ctx.response.body = "Hello Worlds Deno APS";
});
export default router;
