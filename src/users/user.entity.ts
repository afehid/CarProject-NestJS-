import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted User with ID: ${this.id} & Email: ${this.email}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated User with ID: ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed User`);
  }
}
