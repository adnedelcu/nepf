import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { PropertyDocument, PropertySchema } from "./property.schema";
import { Expose } from "class-transformer";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Expose()
  _id: string;

  @Expose()
  @Prop({ type: String, required: true})
  firstName: string;

  @Expose()
  @Prop({ type: String, required: true})
  lastName: string;

  @Expose()
  @Prop({ type: String, required: true})
  email: string;

  @Prop({ type: String, required: true})
  password: string;

  @Expose()
  @Prop({ type: String})
  profilePicture?: string;

  @Expose()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]})
  favorites: PropertyDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
