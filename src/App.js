import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const myRouter = createBrowserRouter([ // array of js objects
  { path: "/", element: <HomePage/> },
  { path: "/products", element: <ProductsPage/> }
])

function App() {
  return (
  <>
    <RouterProvider router={myRouter}/>
  </>
  )
}

export default App;