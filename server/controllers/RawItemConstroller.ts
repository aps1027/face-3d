import { RouterContext } from "../deps.ts";
class RawItemController {
  async getRawItemList(ctx: RouterContext): Promise<void> {
    ctx.response.body = "API tests";
  }
}

const rawItemController = new RawItemController();
export default rawItemController;
