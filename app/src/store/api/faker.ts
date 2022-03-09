const BASE_URL = 'http://localhost:3001/faker';

export function fetchAllUsersFaker() {
  const request = fetch(`${BASE_URL}/users`)
    .then((data) => data.json())
    .then((data) => data);
  return request;
}

export async function fetchUserByIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/users/${id}`)
    .then((data) => data.json())
    .then((data) => data);
  return request;
}

export async function fetchAllPostsFaker() {
  const request = await fetch(`${BASE_URL}/posts`)
    .then((data) => data.json())
    .then((data) => data);
  return request;
}

export async function fetchPostByIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/posts/${id}`)
    .then((data) => data.json())
    .then((data) => data);
  return request;
}

export async function fetchAllPostsByUserIdFaker(id: number) {
  const request = await fetch(`${BASE_URL}/posts/user/${id}`)
    .then((data) => data.json())
    .then((data) => data);
  return request;
}
