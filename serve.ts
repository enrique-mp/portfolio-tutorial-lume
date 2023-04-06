import Server from "https://deno.land/x/lume@v1.16.2/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/public`,
});

server.start();

console.log("Listening on http://localhost:8000");
