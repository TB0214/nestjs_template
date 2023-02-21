import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';

@Entity('user2')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  @IsString()
  name: string;

  @Column()
  @IsString()
  nickName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;
}
