import { parseRoutePath } from "../middlewares/parseRoutePath";

export const routes = [
  {
    method: "GET",
    path: "/products",

    controller: ({ request, response, database }) => {
      const products = database.select("products");
      return response.end(JSON.stringify(products));
    },
  },
  {
    method: "POST",
    path: "/products/:id",
    controller: ({ request, response, database }) => {
      const { name, price } = request.body;

      database.insert("products", { name, price });
      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: ({ request, response }) => {
      return response.end(request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
