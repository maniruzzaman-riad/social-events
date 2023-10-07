import { createBrowserRouter } from "react-router-dom";
import Root from "../rootFile/Root";
import ErrorPage from "../shared/ErrorPage";
import Home from "../service/Home";
import Register from "../inputData/Register";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;