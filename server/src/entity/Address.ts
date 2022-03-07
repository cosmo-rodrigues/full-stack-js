import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("address")
export class Address {
  constructor(street: string, suite: string, zipcode: string, geo: string) {
    this.street = street;
    this.suite = suite;
    this.zipcode = zipcode;
    this.geo = geo;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  zipcode: string;

  @Column({ nullable: true })
  geo: string | null;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "userId",
  })
  user: User;
}
