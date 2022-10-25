import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetails from "../pages/CourseDetails";
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
                element:<Courses></Courses>,
                loader:() => fetch('https://b610-lerning-platform-server-side-blond.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`https://b610-lerning-platform-server-side-blond.vercel.app/courses/${params.id}`)
            }
        ]

}
]);