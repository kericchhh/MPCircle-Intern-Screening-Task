import { useQuery } from "@tanstack/react-query"

import AssignmentCard from "../components/assignments/AssignmentCard"
import { getAssignments } from "../services/assignments"

export default function AssignmentsPage() {
  const {
    data: assignments,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: getAssignments,
  })

  if (isPending) {
    return <p className="text-gray-400">Loading assignments...</p>
  }

  if (isError) {
    return (
      <p className="text-red-400">
        Error: {error.message}
      </p>
    )
  }

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Assignments
        </h1>

        <p className="mt-2 text-gray-400">
          Keep track of your upcoming work and deadlines.
        </p>
      </div>

      {assignments.length === 0 ? (
        <p className="text-gray-400">
          You have no assignments.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />
          ))}
        </div>
      )}
    </section>
  )
}
