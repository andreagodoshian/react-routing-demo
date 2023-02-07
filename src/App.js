import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";

const myRouter = createBrowserRouter([
  // takes an array of js objects
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: // also takes array of js objects
    [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ]
  },
  {
    path: "/admin",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: // Just to show - can have multiple
    [
      { path: "/admin", element: <h1>Admin!!</h1> }
    ]
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
