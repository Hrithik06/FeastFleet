import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";





const Grocery = lazy(()=>
  import("./components/Grocery")
)

// const About = lazy(() => import("./components/About"))
const AppLayout = () => {


  return (
    <div className="app font-poppins">
      <Header />
      <div className="mx-24">
      <Outlet /> 
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        
      },
      {
        path: "/about",
        element: <About />,
        
      },
      {
        path: "/contact",
        element: <Contact />,
        
      },
      {
        path: "/grocery",
        element:( 
        <Suspense fallback={<Shimmer/>} >
          <Grocery />
        </Suspense>),
        
      },
      {
        //colon represents resId is Dynamic
        path:"/restaurant/:resId",
        element:<ResMenu/>,
        
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
