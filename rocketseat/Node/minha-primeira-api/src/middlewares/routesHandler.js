import { routes } from "../utils/routes.js";
import { extractQueryParams } from "./extract-query-params.js";
import { Database } from "../utils/database.js";

const database = new Database();

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url;
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query, ...params } = routeParams.group;

    request.params = params;
    request.query = query ? extractQueryParams(query) : {};

    return route.controller({ request, response, database });
  }

  return response.writeHead(404).end("Rota não encontrada!");
}
