import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./routes/AboutPage";
import NotFoundPage from "./routes/NotFoundPage";
import ProjectsPage from "./routes/ProjectsPage";
import JsonLite from "./routes/projects/JsonLite";
import ContactPage from "./routes/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ProjectsPage /> },
      { path: "jsonlite", element: <JsonLite /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
