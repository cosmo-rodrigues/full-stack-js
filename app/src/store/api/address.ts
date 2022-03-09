const BASE_URL = process.env.BASE_URL

export async function fetchAllAddress() {
  const request = await fetch(`${BASE_URL}/address`)
  return request
}
