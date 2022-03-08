import { Faker } from "../entity/Faker";

export class FakerService {
  async create(data) {
    const user = await new Faker()
    const createdUser = user.create(data)
    return createdUser;
  }

  async findAll() {
    const user = await new Faker()
    const allUsers = user.findAll()
    return allUsers;
  }

  async findOne(id: number) {
    const user = await new Faker()
    const foundedUser = user.findOne(id)
    return foundedUser
  }
}
