import { usersData, postsData } from "../mock/data";

export class IFakerUsersDTO {
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
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class IFakerPostsDTO {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IFaker {
  findAllUsers(): void;
  findOneUser(id: number): void;
  createUser(data: IFakerUsersDTO): void;

  findAllPosts(): void;
  findAllPostsByUserId(id: number): void;
  findOnePost(id: number): void;
  createPost(data: IFakerPostsDTO): void;
}

export class Faker implements IFaker {
  private usersData: IFakerUsersDTO[];
  private postsData: IFakerPostsDTO[];
  constructor() {
    this.usersData = usersData;
    this.postsData = postsData;
  }

  async createUser(data: IFakerUsersDTO) {
    const createdUser = this.usersData.push(data);
    return createdUser;
  }

  async findAllUsers() {
    return this.usersData;
  }

  async findOneUser(id: number) {
    const userFound = this.usersData.filter((user) => user.id === id);
    return userFound;
  }

  async findAllPosts() {
    return this.postsData;
  }

  async findAllPostsByUserId(id: number) {
    const postsFound = this.postsData.filter((post) => post.userId === id);
    return postsFound;
  }

  async findOnePost(id: number) {
    const postFound = this.postsData.filter((post) => post.id === id);
    return postFound;
  }

  async createPost(data: IFakerPostsDTO) {
    const createdPoster = this.postsData.push(data);
    return createdPoster;      
  }
}
