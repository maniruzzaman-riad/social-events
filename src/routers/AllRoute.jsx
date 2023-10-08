import { createBrowserRouter } from "react-router-dom";
import Root from "../rootFile/Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../service/Home";
import Register from "../inputData/Register";
import Login from "../inputData/Login";
import Details from "../service/Details";
import PrivetRout from "./PrivetRout";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/details/:id',
                element:<PrivetRout><Details></Details></PrivetRout>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;