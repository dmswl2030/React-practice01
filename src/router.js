import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Authors from "./screens/authors/Authors";
import Books from "./screens/authors/Books";
import Chapters from "./screens/authors/Chapters";
import Characters from "./screens/authors/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "authors/:name",
        element: <Authors />,
        children: [
          {
            path: ":book",
            element: <Books />,
            children: [
              {
                path: "chapters",
                element: <Chapters />
              },
              {
                path: "characters",
                element: <Characters />
              }
            ]
          }
        ],
        errorElement: <NotFound />
      }
    ]
  }
]);

export default router;
