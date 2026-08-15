import { useQuery } from "@tanstack/react-query"

import CourseCard from "../components/courses/CourseCard"
import { getCourses } from "../services/courses"

export default function CoursesPage() {
    const {
       data: courses,
       isPending,
       isError,
       error
    } = useQuery({
        queryKey: ["courses"],
        queryFn: getCourses,
    })

    if(isPending){
        return <p>Loading courses...</p>
    }
    if(isError){
        return <p>Error: {error.message}</p>
    }

    return(
        <section>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Courses</h1>
                <p className="mt-2 text-gray-400">Track your enrolled courses.</p>
            </div>
            {courses.length === 0 ? (
                <p className="text-gray-400">You are not enrolled in any courses.</p>
            ): (
                <div className="grid grid-cols-1 gap-4 md:grip-cols-2 xl:grid-cols-3">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </div>
            )}
        </section>
    )
}
