import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from 'src/schemas/property.schema';
import { plainToInstance } from 'class-transformer';
import { User } from 'src/schemas/user.schema';
import { PropertyDto } from 'src/dto/property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async index() {
    const properties = await this.propertiesService.findAll();
    console.log(properties);

    return { data: plainToInstance(Property, properties, { excludeExtraneousValues: true }) };
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async show(@Param('id') id: string) {
    let location = await this.propertiesService.findById(id);
    console.log(location);
    return new PropertyDto(location);
    console.log(location);
    console.log('test with dto', plainToInstance(PropertyDto, location, { excludeExtraneousValues: true }));
    location = {
      ...plainToInstance(Property, location, { excludeExtraneousValues: true }),
      user: plainToInstance(User, location.user, { excludeExtraneousValues: true }),
    };
    console.log(location);

    return { data: location };
  }
}
