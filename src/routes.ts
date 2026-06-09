import { createBrowserRouter } from "react-router";
import { Root } from "@/components/partials/Root";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { SuccessPage } from "@/pages/SuccessPage";
import { ContactPage } from "@/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "success", Component: SuccessPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
