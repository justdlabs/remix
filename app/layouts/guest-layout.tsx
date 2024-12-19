import { Outlet } from "@remix-run/react";

export default function GuestLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-full max-w-md">
        {children}
      </main>
    </div>
  );
}
