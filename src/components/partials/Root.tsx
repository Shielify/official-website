import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/partials/Navbar";
import { Footer } from "@/components/partials/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
