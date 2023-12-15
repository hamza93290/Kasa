/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import HomePage from "../pages/Homepage";
import ApartmentPage from "../pages/ApartmentPage";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";


const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element: <ApartmentPage/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  }
]);