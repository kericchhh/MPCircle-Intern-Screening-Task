import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import AssignmentsPage from "./pages/AssignmentsPage"
import CoursesPage from "./pages/CoursesPage"

import ProtectedRoute from "./components/ProtectedRoute"
import AppLayout from "./layouts/AppLayout"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute><AppLayout /> </ProtectedRoute>}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/assignments" element={<AssignmentsPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
