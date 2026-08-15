import StatCard from "../components/dashboard/StatCard"

export default function DashboardPage() {
    return (
        <section>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-shadow-white sm:text-3xl">Welcome back, student</h1>
                <p className="mt-2 text-gray-400">Here is your academic progress.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Courses" value={6} helperText="Currently enrolled"/>
                <StatCard label="Upcoming assignmnets" value={3} helperText="See what awaits you next"/>
                <StatCard label="Attendance" value="%94" helperText="Current semester"/>
                <StatCard label="GPA" value={4.5} helperText="Out of 5"/>
            </div>
        </section>
    )
}
