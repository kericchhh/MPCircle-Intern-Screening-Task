import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    loginSchema,
    type LoginFormData,
} from "../schemas/loginSchema"

export default function LoginPage() {
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState("")
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

    async function onSubmit(data: LoginFormData) {
        setLoginError("")
        try {
            await new Promise((resolve) => setTimeout(resolve, 1200))
            console.log(data)
            navigate("/dashboard")
        } catch {
            setLoginError("Something is wrong... Please try again.")
        }
    }
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="mt-2 text-sm text-gray-600">Sign in to access the student dashboard.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm text-shadow-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email" type="email" {...register("email")}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
                        />

                        {errors.email && (
                            <p>{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm text-shadow-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password" type="password" {...register("password")}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border:gray-900"
                        />
                        {errors.password && (
                            <p>{errors.password.message}</p>
                        )}
                    </div>

                    {loginError && (
                        <p>{loginError}</p>
                    )}

                    <button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-gray-900 px-4 py-2.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </main>
    )
}
