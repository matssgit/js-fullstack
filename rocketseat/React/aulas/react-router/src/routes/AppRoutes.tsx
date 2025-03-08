import { Routes, Route } from "react-router";

import { Layout } from "../components/Layout";

import { Home } from "../pages/Home";
import { Details } from "../pages/Deatils";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
