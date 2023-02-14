import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserModel } from '../../models/mongo/user.model';
import { CreateUserDto } from './dto/create-user.dto';

export class UserRepository {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UserModel> {
    return this.userModel.create(createUser);
  }
}
