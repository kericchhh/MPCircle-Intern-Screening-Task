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
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e] px-4">
            <div className="w-full max-w-md rounded-2xl bg-[#030517] p-8 shadow-sm">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                    <p className="mt-2 text-sm text-gray-400">Sign in to access the student dashboard.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm text-white"
                        >
                            Email
                        </label>
                        <input
                            id="email" type="email" {...register("email")}
                            className="w-full rounded-lg border border-[#bfc7f8] px-3 py-2 outline-none focus:border-[#6c7fef] text-gray-400"
                            placeholder="example@email.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email error" : undefined}
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-900">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm text-white"
                        >
                            Password
                        </label>
                        <input
                            id="password" type="password" {...register("password")}
                            className="w-full rounded-lg border border-[#bfc7f8] px-3 py-2 outline-none focus:border-[#6c7fef] text-gray-400"
                            placeholder="min. 8 characters"
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? "password error" : undefined}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-900">{errors.password.message}</p>
                        )}
                    </div>

                    {loginMutation.isError && (
                        <p className="mt-1 text-sm text-red-900" role="alert">{loginMutation.error.message}</p>
                    )}

                    <button type="submit" aria-busy={loginMutation.isPending} disabled={loginMutation.isPending} className=" text-white font-bold w-full rounded-lg bg-[#6c7fef] px-4 py-2.5 text-white disabled:cursor-not-allowed disabled:opacity-60">
                        {loginMutation.isPending ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </div>
        </main>
    )
}
