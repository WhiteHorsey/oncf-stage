import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import BugsPage from "./pages/bugs/BugsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/bugs",
    element: <BugsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
