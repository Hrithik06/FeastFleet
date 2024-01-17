import React, {Suspense, lazy, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";

import Accordion from "./components/Accordion";
import UserContext from "./components/UserContext";



const Grocery = lazy(()=>
  import("./components/Grocery")
)

const About = lazy(() => import("./components/About"))
const AppLayout = () => {

  const [userName, setUserName] = useState()
  //auhthentication

  useEffect(()=>{
    //API call and send Username and Password get result data

    const data ={
      name:"Hrithik"
    }
    setUserName(data.name);
  },[])
console.log(userName)

  return (

    <UserContext.Provider value={{loggedInUser:userName, setUserName }}>
      {/* //Hrithik */}
    <div className="font-poppins ">
    {/* <UserContext.Provider value={{loggedInUser:"Not Hrithik" }}> */}
      {/* //Not Hrithik only in Header */}
      <Header />
    {/* </UserContext.Provider> */}

      <div className="">
      <Outlet /> 
      </div>
    </div>
    </UserContext.Provider>
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
        element:   (<Suspense fallback={<Shimmer/>} >
        <About />
      </Suspense>),
        
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
      {
        path: "/accordion",
        element: <Accordion />,
        
      },
    ],
    
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
