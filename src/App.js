import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {createBrowserRouter, 
Outlet,
RouterProvider, 
ScrollRestoration, 
} from "react-router-dom";
import Cart from "./pages/Cart";
import {productsData} from "./api/Api";

const Layout=()=>{
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
  };
   const router = createBrowserRouter([
    {
      path: "/mod_2_project",
      element: <Layout/>,
      children: [
        {
          path: "/mod_2_project",
          element: <Home/>,
          loader:productsData, 
          },
          {
            path: "/mod_2_project/cart",
            element: <Cart/>,
          },
      ],
    },
  ]);

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>   
    </div>
  ); 
}

export default App;
