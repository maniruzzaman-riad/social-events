import { createBrowserRouter } from "react-router-dom";
import Root from "../rootFile/Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../service/Home";
import Register from "../inputData/Register";
import Login from "../inputData/Login";
import Details from "../service/Details";
import PrivetRout from "./PrivetRout";
import Contact from "../shared/Contact";
import UserInfo from "../shared/UserInfo";
import Privecy from "../shared/Privecy";


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
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/privecy',
                element:<Privecy></Privecy>
            },
            {
                path:'/userInfo',
                element:<UserInfo></UserInfo>
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