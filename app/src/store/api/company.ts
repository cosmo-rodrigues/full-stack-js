const BASE_URL = process.env.BASE_URL

export async function fetchAllCompany() {
  const request = await fetch(`${BASE_URL}/company`)
  return request
}
