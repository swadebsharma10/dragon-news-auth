import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsPage from "../Pages/NewsPage";
import PrivetRoute from "../Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/public/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivetRoute><NewsPage></NewsPage></PrivetRoute>
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
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
  },
]);


export default router;