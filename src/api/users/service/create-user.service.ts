import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(createUserDto: CreateUserDto) {
    console.log('create User');
    return this.userRepository.createUser(createUserDto);
  }
}
