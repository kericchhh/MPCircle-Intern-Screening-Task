export type LoginCredentials = {
    email: string, 
    password: string
}
export type LoginRes = {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string
}

export async function loginUser(credentials: LoginCredentials){
    const response = await fetch("https://dummyjson.com/users/1")
    if(!response.ok){
        throw new Error("Login failed!")
    }
    const user = await response.json()
    if(credentials.email !== user.email){
        throw new Error("Invalid field/s")
    }
    return user
}
