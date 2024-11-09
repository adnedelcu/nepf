import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from 'src/schemas/property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Property.name, schema: PropertySchema }])
  ],
  controllers: [
    PropertiesController,
  ],
  providers: [
    PropertiesService,
  ]
})
export class PropertiesModule {}
