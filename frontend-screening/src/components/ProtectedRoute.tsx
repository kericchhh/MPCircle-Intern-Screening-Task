import { Navigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

type ProtectedRouteProps = {
  children: React.ReactNode
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return children
}
