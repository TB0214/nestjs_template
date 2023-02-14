import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  collection: 'user',
  timestamps: true,
  versionKey: false,
  read: 'secondaryPreferred',
})
export class UserModel {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  nickName: string;
}

export type UserDocument = UserModel & Document;
export const UserSchema = SchemaFactory.createForClass(UserModel);
