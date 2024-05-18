import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RegisterPage />
            // element: <HomePage />
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: "/login",
            element: <LoginPage />
        }
    ],
    // {
    //     basename: "/final-project"
    // }
    // [
    //     {
    //         path: "/",
    //         element: <App />,
    //         children: [
    //             { path: "register", element: <RegisterPage /> },
    //             { path: "login", element: <LoginPage /> },
    //         ],
    //     },
    // ],
    // {
    //     basename: "/final-project", // กำหนด basename สำหรับการ deploy บน GitHub Pages
    // }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
