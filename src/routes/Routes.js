import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Page404 from "../pages/Page404";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
                element:<Courses></Courses>,
                loader:() => fetch('https://b610-lerning-platform-server-side-blond.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`https://b610-lerning-platform-server-side-blond.vercel.app/courses/${params.id}`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=>fetch(`https://b610-lerning-platform-server-side-blond.vercel.app/courses/${params.id}`)
            }
        ]
        
},
         {
            path:'/*',
            element:<Page404></Page404>}
]);