import { NavLink, useNavigate } from "react-router-dom"

import { useAuth } from "../../context/AuthContext"

const links = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Courses", to: "/courses" },
  { label: "Assignments", to: "/assignments" },
]

export default function Header() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  function handleLogout() {
    logout()
    navigate("/login")
  }

  return (
    <header className="border-b border-gray-200 bg-[#030517]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-lg font-bold text-white">
              MPCircle
            </h1>
            <p className="text-xs text-gray-400">
              Student Portal
            </p>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-[#6c7fef] text-white"
                      : "text-gray-600 hover:bg-[#bfc7f8] hover:text-[#030517]",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-[#bfc7f8] px-3 py-2 text-sm font-medium text-white hover:bg-[#6c7fef] hover:border-none"
        >
          Log out
        </button>
      </div>
    </header>
  )
}
