import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import BugsPage from "./pages/bugs/BugsPage";
import EvolutionsPage from "./pages/evolutions/EvolutionsPage";
import BugFixsPage from "./pages/bugfixs/BugFixsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/bugs",
    element: <BugsPage />,
  },
  {
    path: "/evolutions",
    element: <EvolutionsPage />,
  },
  {
    path: "/bugFixs",
    element: <BugFixsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
