export type AssignmentStatus = "pending" | "submitted" | "overdue"
export type Priority = "low" | "medium" | "high"

export type Assignment = {
    id: number,
    title: string,
    dueDate: string,
    status: AssignmentStatus,
    priority: Priority
}
