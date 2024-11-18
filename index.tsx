import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartApp from "./start/StartApp";
import EndApp from "./end/EndApp";
import ErrorPage from "./ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <StartApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/end",
    element: <EndApp />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
