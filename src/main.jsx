import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home/Home.jsx";
// import Register from "./pages/Register/Register.jsx";
// import Login from "./pages/Login/Login.jsx";

// const router = createBrowserRouter(
//     [
//         {
//             path: "/",
//             element: <Home />
//         },
//         {
//             path: "/register",
//             element: <Register />
//         },
//         {
//             path: "/login",
//             element: <Login />
//         }
//     ],
// );

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        {/* <RouterProvider router={router}></RouterProvider> */}
    </React.StrictMode>
);
