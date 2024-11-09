import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Point, PointDocument, PointSchema } from "./point.schema";
import { User, UserDocument } from "./user.schema";
import { Expose } from "class-transformer";

export type PropertyDocument = HydratedDocument<Property>;

export enum PropertyTypeEnum {
  House = 'house',
  Apartment = 'apartment',
  Condo = 'condo',
  Office = 'office',
}

@Schema()
export class Property {
  @Expose()
  _id: string;

  @Expose()
  @Prop({ type: String, required: true})
  title: string;

  @Expose()
  @Prop({ type: String, required: true})
  type: PropertyTypeEnum;

  @Expose()
  @Prop({ type: PointSchema, required: true})
  location: Point;

  @Expose()
  @Prop({ type: String, required: true})
  price: number;

  @Expose()
  @Prop({ type: String, required: true})
  description: string;

  @Expose()
  @Prop({ type: [String], required: true})
  images?: Array<string>;

  @Expose()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
