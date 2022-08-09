import { Router } from "itty-router";

const router = Router();

const base = "https://mihir.ch";
const statusCode = 301;

router.all("*", (request) => {
  const url = new URL(request.url);
  const { pathname, search, host } = url;
  const destinationURL = `${base}${pathname}${search}${
    search ? "&" : "?"
  }from=${host}`;
  return Response.redirect(destinationURL, statusCode);
});

export default {
  async fetch(request: Request): Promise<Response> {
    return router.handle(request);
  },
};
