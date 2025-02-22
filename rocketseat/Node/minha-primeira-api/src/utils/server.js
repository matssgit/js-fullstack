import http from "node:http";
import { jsonBodyHandler } from "../middlewares/jsonBodyHandler.js";
import { json } from "node:stream/consumers";
import { routesHandler } from "../middlewares/routesHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response);
  routesHandler(request, response);
});

server.listen(3333);
