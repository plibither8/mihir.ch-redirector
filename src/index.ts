const base = "https://mihir.ch";
const statusCode = 301;

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname, search, host } = url;
  const destinationURL = `${base}${pathname}${search}${
    search ? "&" : "?"
  }from=${host}`;
  return Response.redirect(destinationURL, statusCode);
}

addEventListener("fetch", async (event) => {
  event.respondWith(handleRequest(event.request));
});
