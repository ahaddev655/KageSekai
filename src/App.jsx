import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GreetingPage from "./pages/main/GreetingPage";
import HomePage from "./pages/main/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/",
      element: <GreetingPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
