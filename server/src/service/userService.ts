import { getManager } from "typeorm";
import { tokenGenerate } from "../auth/tokenGenerator";
import { User } from "../entity/User";
// import { HttpException } from "../utils/HttpException";
// import { httpStatusCode } from "../constants/httpStatusCode";

export class UserService {
  async create(user: User) {
    const createdUser = await getManager().save(user);
    const token = tokenGenerate({ email: createdUser.email });
    return token;
  }

  async findAll() {
    const user = await getManager().find(User);
    return user;
  }

  async findOne(id: number) {
    const user = await getManager().findOne(User, id);
    return user;
  }
}
