import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import AssignmentsPage from "./pages/AssignmentsPage"
import CoursesPage from "./pages/CoursesPage"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to ="/login" replace />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /> </ProtectedRoute>} />
                <Route path="/assignments" element={<ProtectedRoute><AssignmentsPage /> </ProtectedRoute>} />
                <Route path="/courses" element={<ProtectedRoute><CoursesPage /> </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
