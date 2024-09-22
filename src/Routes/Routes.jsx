import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/login',
        element: <Career></Career>
      },
      {
        path: '/register',
        element: <Career></Career>
      },
    ],
  },
]);


export default router;