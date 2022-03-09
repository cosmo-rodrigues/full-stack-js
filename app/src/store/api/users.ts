const BASE_URL = process.env.BASE_URL

export async function fetchAllUsers() {
  const request = await fetch(`${BASE_URL}/users`)
  return request
}

export async function fetchUserById(id: number) {
  const request = await fetch(`${BASE_URL}/users/${id}`)
  return request
}