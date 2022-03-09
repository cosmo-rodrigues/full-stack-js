const BASE_URL = process.env.BASE_URL

export async function fetchAllUsersFaker() {
  const request = await fetch(`${BASE_URL}/users`)
  return request
}

export async function fetchUserByIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/users/${id}`)
  return request
}

export async function fetchAllPostsFaker() {
  const request = await fetch(`${BASE_URL}/posts`)
  return request
}

export async function fetchPostByIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/posts/${id}`)
  return request
}

export async function fetchAllPostsByUserIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/posts/user/${id}`)
  return request
}
