import { Hono } from "hono";

const app = new Hono();

app.all("*", (ctx) => {
  const url = new URL(ctx.req.url);
  const { pathname, search, host } = url;
  const destinationURL = `https://mihir.ch${pathname}${search}${
    search ? "&" : "?"
  }from=${host}`;
  return ctx.redirect(destinationURL, 301);
});

export default app;
