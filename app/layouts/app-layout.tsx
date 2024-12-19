import { Outlet } from "@remix-run/react";
import { AppNavbar } from "~/app-navbar";
import { Footer } from "~/components/footer";

export default function AppLayout() {
  return (
    <div>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
