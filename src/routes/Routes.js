import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/course/:id',
                element:<Course></Course>
            }
        ]

}
]);