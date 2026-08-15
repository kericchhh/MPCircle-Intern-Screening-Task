import type { Assignment } from "../../types/assignment"

type AssignmentCardProps = {
  assignment: Assignment
}

export default function AssignmentCard({
  assignment,
}: AssignmentCardProps) {
  return (
    <article className="rounded-2xl border border-white/20 p-5 sm:p-7 transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">
          {assignment.title}
        </h2>

        <span className="rounded-full bg-[#49429a] px-3 py-1 text-xs font-medium capitalize text-white">
          {assignment.status}
        </span>
      </div>

      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Due date</span>
          <span className="text-white">
            {assignment.dueDate}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Priority</span>
          <span className="capitalize text-white">
            {assignment.priority}
          </span>
        </div>
      </div>
    </article>
  )
}
