import type { Course } from "../types/course";

export async function getCourses(): Promise<Course[]>{
    await new Promise((resolve) => setTimeout(resolve,500))

    return [
        {
            id:1,
            title: "WebDev 101",
            lecturer: "Mr. Smith",
            progress: 78,
            status: "active"
        },
        {
            id:2,
            title: "DSA",
            lecturer: "NeetCode",
            progress: 89,
            status: "active"
        },
        {
            id:3,
            title: "Software Engineering",
            lecturer: "ThePrimeAgen",
            progress: 100,
            status: "completed"
        },
        {
            id:4,
            title: "VibeCoding",
            lecturer: "CryptoBro",
            progress: 0,
            status: "upcoming"
        }
    ]
}
