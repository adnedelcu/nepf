import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { JwtModule } from '@nestjs/jwt';
import { PropertiesModule } from './properties/properties.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AuthModule } from './auth/auth.module';

const mongooseOptions : MongooseModuleOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
  dbName: process.env.MONGO_NAME,
  // connectionFactory: (connection) => {
  //   connection.plugin(mongooseAutoPopulate);
  //   return connection;
  // }
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, mongooseOptions),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
    PropertiesModule,
  ],
  controllers: [
  ],
  providers: [
  ],
  exports: [
  ],
})
export class AppModule {}
