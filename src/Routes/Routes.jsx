import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children:[
      {
         path: '/',
         
      }
     ]
   },
 ]);

 export default router