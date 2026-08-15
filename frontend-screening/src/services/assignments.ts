import type { Assignment } from "../types/assignment"

export async function getAssignments(): Promise<Assignment[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      title: "Build Student Dashboard",
      dueDate: "2026-08-18",
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Database Normalization Exercise",
      dueDate: "2026-08-21",
      status: "pending",
      priority: "medium",
    },
    {
      id: 3,
      title: "Software Engineering Report",
      dueDate: "2026-08-12",
      status: "overdue",
      priority: "high",
    },
    {
      id: 4,
      title: "HCI Prototype",
      dueDate: "2026-08-10",
      status: "submitted",
      priority: "low",
    },
  ]
}
