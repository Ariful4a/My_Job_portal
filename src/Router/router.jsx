import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import JobDetails from "../Components/JobDetails";
import JobApply from "../Components/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyAppliclint from "../Components/MyAppliclint";
import AddJob from "../AddJob/AddJob";
import MyPost from "../AddJob/MyPost";
import ViwApplications from "../AddJob/ViwApplications";
import Course_add from "../My_course/Course_add";
import My_courseCards from "../My_course/My_courseCards";
import Course_details from "../My_course/Course_details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h1>ERorr</h1>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: "/jobs/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/myAppliClint',
          element: <PrivateRoute><MyAppliclint></MyAppliclint></PrivateRoute>

        },
        {
          path: '/addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/myPostJob',
          element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
        }, 
        {
          path: '/viewApplications/:jobId',
          element: <PrivateRoute><ViwApplications></ViwApplications></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.jobId}`),
        },
        {
          path: '/myCourses',
          element: <PrivateRoute><Course_add></Course_add></PrivateRoute>
        },
        {
          path: '/myCourseCards',
          element: <PrivateRoute><My_courseCards></My_courseCards></PrivateRoute>
        },
        {
          path: '/CourseDetails/:id',
          element: <PrivateRoute><Course_details></Course_details></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/myCourses/${params.id}`)
        }

       
    ]
  },
]);

export default router;
