export type CourseStatus = "active" | "completed" | "upcoming"

export type Course = {
    id: number,
    title: string,
    lecturer: string,
    progress: number,
    status: CourseStatus
}
