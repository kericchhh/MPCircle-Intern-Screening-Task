export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export async function getUser(): Promise<User> {
  const response = await fetch("https://dummyjson.com/users/1")

  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }

  return response.json()
}
