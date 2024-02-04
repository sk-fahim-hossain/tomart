import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Career from "./../Pages/Career/Career";
import CokiePolicy from "./../Pages/CokiePolicy/CokiePolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetails from "./../Pages/ProductDetails/ProductDetails";
import CartPage from "./../Pages/CartPage/CartPage";
import Checkout from "./../Pages/Checkout/Checkout";
import AllUsers from "../Pages/AllUsers/AllUsers";
import UserOrder from "../Pages/UserOrder/UserOrder";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <SignUp></SignUp>,
      },
      {
        path: "/jobs",
        element: <Career></Career>,
      },
      {
        path: "/addtoy",
        element: (
          <AdminRoute>
            <AddToy></AddToy>
          </AdminRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage></CartPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <AdminRoute>
            <UserOrder></UserOrder>
          </AdminRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/toys/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/cookiepolicy",
        element: <CokiePolicy></CokiePolicy>,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
    ],
  },
]);

export default router;
