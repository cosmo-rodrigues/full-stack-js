import { Faker, IFakerPostsDTO, IFakerUsersDTO } from "../entity/Faker";

export class FakerService {
  async createUser(data: IFakerUsersDTO) {
    const user = await new Faker()
    const createdUser = user.createUser(data)
    return createdUser;
  }

  async findAllUsers() {
    const user = await new Faker()
    const allUsers = user.findAllUsers()
    return allUsers;
  }

  async findOneUser(id: number) {
    const user = await new Faker()
    const foundedUser = user.findOneUser(id)
    return foundedUser
  }

  async createPost(data: IFakerPostsDTO) {
    const user = await new Faker()
    const createdPost = user.createPost(data)
    return createdPost;
  }

  async findAllPosts() {
    const user = await new Faker()
    const allPosts = user.findAllPosts()
    return allPosts;
  }

  async findAllPostsByUserId(id: number) {
    const user = await new Faker()
    const foundedUser = user.findAllPostsByUserId(id)
    return foundedUser
  }

  async findOnePost(id: number) {
    const user = await new Faker()
    const allPosts = user.findOnePost(id)
    return allPosts;
  }
}
