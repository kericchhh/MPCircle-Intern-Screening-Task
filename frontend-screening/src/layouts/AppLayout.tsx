import { Outlet } from "react-router-dom"

import Header from "../components/layout/Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e] text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
