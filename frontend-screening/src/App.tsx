import { useQuery } from "@tanstack/react-query"
import { getUser } from "./services/users"

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <main>
      <h1>
        Welcome, {data.firstName} {data.lastName}
      </h1>

      <p>{data.email}</p>
    </main>
  )
}

export default App
