import { Outlet } from "@remix-run/react";
import { AppNavbar } from "~/app-navbar";
import { Footer } from "~/components/footer";

export default function AppLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AppNavbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
