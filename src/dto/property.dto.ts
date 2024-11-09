import { Expose } from "class-transformer";
import { PointDocument } from "src/schemas/point.schema";
import { PropertyTypeEnum } from "src/schemas/property.schema";

export class PropertyDto {
  @Expose()
  _id: string;
  @Expose()
  type: PropertyTypeEnum;
  @Expose()
  location: {
    coordinates: Number[],
  };
  @Expose()
  price: number;
  @Expose()
  title: string;
  @Expose()
  description: string;
  @Expose()
  images: Array<string>;
  // @Expose()
  // user: {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  // };

  constructor(partial: Partial<PropertyDto>) {
    // Object.assign(this, partial);
    this._id = partial._id.toString();
    this.price = partial.price;
    this.title = partial.title;
    this.description = partial.description;
    this.location = partial.location;
    this.images = partial.images;
    this.type = partial.type;
  }
}
