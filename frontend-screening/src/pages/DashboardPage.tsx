import StatCard from "../components/dashboard/StatCard"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../services/users"

export default function DashboardPage() {
    const {
        data: user,
        isPending,
        isError,
        error
    } = useQuery({
        queryKey: ["user"],
        queryFn: getUser
    })
    if(isPending){
        return <p className="text-gray-400">Loading dashboard...</p>
    }
    if(isError){
        return <p className="text-red-400">Error: {error.message}</p>
    }
    return (
        <section>
            <div className="mb-8 sm:mb-8">
                <h1 className="text-2xl font-bold text-shadow-white sm:text-3xl">Welcome back, {user.firstName}</h1>
                <p className="mt-2 text-sm text-gray-400 sm:text-base">Here is your academic progress.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Courses" value={6} helperText="Currently enrolled"/>
                <StatCard label="Upcoming assignmnets" value={3} helperText="See what awaits you next"/>
                <StatCard label="Attendance" value="94%" helperText="Current semester"/>
                <StatCard label="GPA" value={4.5} helperText="Out of 5"/>
            </div>
        </section>
    )
}
