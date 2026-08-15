import type { Course } from "../../types/course"

type CourseProps = {
    course: Course
}

export default function CourseCard({ course }: CourseProps) {
    return (
        <article className="
        rounded-2xl border border-[#bfc7f8] bg-[#030517]
        p-5 transition duration-300 ease-out 
        motion-safe:hover:-translate-y-1 motion-safe:scale-[1.02]">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-white">{course.title}</h2>
                    <p className="mt-1 text-sm text-gray-300">{course.lecturer}</p>
                </div>
                <span className="rounded-full bg-linear-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e] px-3 py-1 text-xs capitalize text-white font-bold">
                    {course.status}
                </span>
            </div>

            <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-gray-300">Progress</span>
                        <span className="font-medium text-white">{course.progress}</span>
                    </div>
                    <div className="
                    h-2 overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-valuenow={course.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${course.title} progress`}>
                        <div className="h-full rounded-full bg-linear-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e] transition-all" style={{ width: `${course.progress}%`}}/>
                    </div>
                </div>
        </article>
    )
}
