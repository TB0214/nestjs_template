import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  nickName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
