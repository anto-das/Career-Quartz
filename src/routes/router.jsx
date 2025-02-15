import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetail from "../Pages/JobDetail";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/AddJob/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2> Page not found </h2>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch("https://job-portal-server-liart-tau.vercel.app/jobs")
        },
        {
          path:"/jobs/:id",
          element:<PrivateRoutes><JobDetail></JobDetail></PrivateRoutes>,
          loader:({params}) => fetch(`https://job-portal-server-liart-tau.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/jobApply/:id",
          element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
          path:"/myApplication",
          element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
        },
        {
          path:"/addJob",
          element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path:"/myPostedJobs",
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
        },
        {
          path:"/viewApplication/:job_id",
          element:<PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
          loader:({params}) => fetch(`https://job-portal-server-liart-tau.vercel.app/job-applications/jobs/${params.job_id}`) 
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);


  export default router;