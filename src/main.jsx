import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createHashRouter, createBrowserRouter } from "react-router";
import Root from "./routes/Root.jsx";
import Pokemon from "./routes/Pokemon.jsx";
import About from "./routes/About.jsx";
import PokemonPage from "./routes/PokemonPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: About,
      },
      {
        path: "/page/:pageNumber",
        Component: PokemonPage,
      },
      {
        path: "/pokemon/:id",
        element: <Pokemon />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
