import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../services/auth"
import { useAuth } from "../context/AuthContext"

import {
    loginSchema,
    type LoginFormData,
} from "../schemas/loginSchema"

export default function LoginPage() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            login()
            navigate("/dashboard")
        }
    })
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

    async function onSubmit(data: LoginFormData) {
        loginMutation.mutate(data)
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

                    {loginMutation.isError && (
                        <p>{loginMutation.error.message}</p>
                    )}

                    <button type="submit" disabled={loginMutation.isPending} className="w-full rounded-lg bg-gray-900 px-4 py-2.5 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
                        {loginMutation.isPending ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </main>
    )
}
