import { oakCors, Application } from "./deps.ts";
import router from "./router.ts";

const app = new Application();

app.use(
  oakCors({
    origin: "*",
  }),
);

app.use(router.routes());

await app.listen({ port: 5000 });
