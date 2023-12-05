import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Login from "../LoginRegistration/Login";
import Register from "../LoginRegistration/Register";
import AccessoriesPage from "../Pages/Accessories/Accessories";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProductDetails from "../Pages/UpdateProductDetails/UpdateProductDetails";
import Layout from "./../Layout/Layout";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRout>
            <AddProduct></AddProduct>
          </PrivetRout>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "products/brand/:brand",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-seven-gold.vercel.app/products/brand/${params.brand}`
          ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivetRout>
            <ProductDetails></ProductDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-seven-gold.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/updateProductDetails/:id",
        element: (
          <PrivetRout>
            <UpdateProductDetails></UpdateProductDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-seven-gold.vercel.app/updateProductDetails/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRout>
            <MyCart></MyCart>
          </PrivetRout>
        ),
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "/accessories",
        element: <AccessoriesPage></AccessoriesPage>,
      },
    ],
  },
]);

export default router;
