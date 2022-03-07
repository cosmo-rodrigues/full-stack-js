import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("company")
export class Company {
  constructor(catchPhrase: string, bs: string) {
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "userId",
  })
  user: User;
}
