import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { UserDocument, UserModel } from '../../models/mongo/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from '../../models/postgres/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserDocument>,
    @InjectRepository(User)
    private readonly userEntity: Repository<User>,
  ) {}

  async createUserIntoMongo(createUser: CreateUserDto): Promise<UserModel> {
    return this.userModel.create(createUser);
  }

  async createUserIntoPSQL(createUserDto: CreateUserDto) {
    const user: User = new User();

    user.name = createUserDto.name;
    user.nickName = createUserDto.nickName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.userEntity.insert(user);
  }
}
