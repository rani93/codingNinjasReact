import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
// import itemDetailsData from "./data";
import { ItemDetails } from "./pages/ItemDetails";

export default function App() {
  // add dynamic route to the list route below
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/list",
          element: <List />},
          {path: "/list/:itemId", element: <ItemDetails />}

      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
