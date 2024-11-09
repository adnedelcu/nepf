import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PointDocument = HydratedDocument<Point>;

@Schema()
export class Point {
  @Prop()
  type: string;

  @Prop([Number])
  coordinates: Array<Number>;
}

export const PointSchema = SchemaFactory.createForClass(Point);
