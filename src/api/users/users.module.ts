import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
