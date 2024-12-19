import { Outlet } from "@remix-run/react";

export default function GuestLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-full max-w-md">
        <Outlet />
      </main>
    </div>
  );
}
