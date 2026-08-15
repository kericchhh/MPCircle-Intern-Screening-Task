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
        <header className="border-b border-gray-700 bg-linear-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-8">
                        <div>
                            <h1 className="text-xl font-bold text-white sm:text-2xl">
                                MPCircle
                            </h1>

                            <p className="text-xs text-gray-300">
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
                                                ? "bg-[#030517] text-white"
                                                : "text-gray-300 hover:bg-[#bfc7f8] hover:text-[#030517]",
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
                        className="rounded-lg border border-[#bfc7f8] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#030617]"
                    >
                        Log out
                    </button>
                    </div>
                <nav
                    aria-label="Mobile navigation"
                    className="flex gap-2 overflow-x-auto pb-3 md:hidden"
                >
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                [
                                    "shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition",
                                    isActive
                                        ? "bg-[#030517] text-white"
                                        : "text-gray-300 hover:bg-[#bfc7f8] hover:text-[#030517]",
                                ].join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}
