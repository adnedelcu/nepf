import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Property } from 'src/schemas/property.schema';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property.name) private readonly propertyModel: Model<Property>) {};

  async findAll(): Promise<Property[]> {
    return await this.propertyModel.find().populate('user');
  }

  async findById(id: string): Promise<Property> {
    return await this.propertyModel.findById(id);
  }
}
