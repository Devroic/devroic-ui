import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JavaDocs from "./components/JavaDocs";
import Layout from "./components/Layout";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFoundPage from "./routes/NotFoundPage";
import ProjectsPage from "./routes/ProjectsPage";
import JsonLite from "./routes/projects/JsonLite";
import ToothSegmentation from "./routes/projects/ToothSegmentation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ProjectsPage /> },
      { path: "jsonlite", element: <JsonLite /> },
      { path: "tooth-segmentation", element: <ToothSegmentation /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "jsonlite/javadocs",
    element: <JavaDocs path="/javadocs/jsonlite/index.html" />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
