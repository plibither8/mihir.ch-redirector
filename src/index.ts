import { Hono } from "hono";

const app = new Hono();

app.all("*", (ctx) => {
  const url = new URL(ctx.req.url);
  const { host: originalHost } = url;
  url.hostname = "mihir.ch";
  url.searchParams.set("from", originalHost);
  return ctx.redirect(url.toString(), 301);
});

export default app;
