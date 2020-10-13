import { Router, RouterContext } from "./deps.ts";
import rawItemConstroller from "./controllers/RawItemConstroller.ts";
const router = new Router();

router
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = Deno.env.get("APP_NAME") || "Hello Worlds";
  })
  .get(
    "/api/raw-item-list",
    rawItemConstroller.getRawItemList.bind(
      rawItemConstroller,
    ),
  );
export default router;
