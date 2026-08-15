import { Outlet } from "react-router-dom"

import Header from "../components/layout/Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#030517] text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
