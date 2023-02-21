import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(createUserDto: CreateUserDto) {
    console.log('create User');
    await this.userRepository.createUserIntoMongo(createUserDto);
    await this.userRepository.createUserIntoPSQL(createUserDto);
  }
}
