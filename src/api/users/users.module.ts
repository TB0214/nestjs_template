import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/postgres/user.entity';
import { CreateUserService } from './service/create-user.service';
import { UserRepository } from './users.repository';
import { UserModel, UserSchema } from '../../models/mongo/user.model';
import { Repository } from 'typeorm';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UserRepository, CreateUserService, Repository],
})
export class UsersModule {}
