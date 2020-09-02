import { Application } from "./deps.ts";
import router from "./router.ts";

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }: any) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt: any) => {
  console.log(evt.error);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 5000 });
