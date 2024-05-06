import '../App.css'

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import WorksPage from "../pages/WorksPage/WorksPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFoundPage from "../pages/NotFoudPage/NotFoundPage";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
        
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
    
      {
        path: "/contact",
        element: <ContactPage />,
      },
      { path: "*", element: <HomePage/> },
    ],
  },
]);
