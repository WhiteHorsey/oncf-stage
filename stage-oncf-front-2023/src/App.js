import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import BugsPage from "./pages/bugs/BugsPage";
import EvolutionsPage from "./pages/evolutions/EvolutionsPage";
import BugFixsPage from "./pages/bugfixs/BugFixsPage";
import AddBugPage from "./pages/bugs/AddBugPage";
import AddBugFixPage from "./pages/bugfixs/AddBugFixPage";
import AddEvolutionPage from "./pages/evolutions/AddEvolutionPage";

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
    path: "/bugs/add",
    element: <AddBugPage />,
  },
  {
    path: "/evolutions",
    element: <EvolutionsPage />,
  },
  {
    path: "/evolutions/add",
    element: <AddEvolutionPage />,
  },
  {
    path: "/bugFixs",
    element: <BugFixsPage />,
  },
  {
    path: "/bugFixs/add",
    element: <AddBugFixPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
