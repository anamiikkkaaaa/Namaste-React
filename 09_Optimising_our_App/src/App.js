import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import { Outlet } from "react-router-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet/>
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      children: [
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>
        }
      ],
      errorElement: <Error/>
    }
  ])

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<RouterProvider router={appRouter}/>);