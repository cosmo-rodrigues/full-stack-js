const BASE_URL = process.env.BASE_URL
export async function fetchAll() {
  const request = await fetch(`${BASE_URL}/users`)
  return request
}
