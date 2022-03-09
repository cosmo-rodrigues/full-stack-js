const BASE_URL = process.env.BASE_URL

export async function fetchAllPosts() {
  const request = await fetch(`${BASE_URL}/posts`)
  return request
}
