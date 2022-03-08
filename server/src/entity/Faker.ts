import { data } from '../mock/data';

class IFakerDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
    lat: string;
    lng: string;
    }
    };
    phone: string;
    website: string;
    company: {
    name: string;
    catchPhrase: string;
    bs: string;
    }
}

interface IFaker {

    findAll(): void
    findOne(id: number): void
    create(data: IFakerDTO): void

}

export class Faker implements IFaker{
  private data: IFakerDTO[]
  constructor() {
    this.data = data
  }

  async create(data) {
    const createdUser = this.data.push(data)
    return createdUser
  }

  async findAll() {
      return this.data
  }

  async findOne(id: number) {
      const userFound = this.data.filter((user) => user.id === id)
      return userFound
  }

}