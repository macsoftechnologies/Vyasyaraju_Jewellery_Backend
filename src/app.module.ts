import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Register } from './userRegister/entity/userRegister.entity';
import { userRegisterModule } from './userRegister/userRegister.module';
import { createConnection } from 'typeorm';
import { QueriesController } from './queries/queries.controller';
import { QueriesService } from './queries/queries.service';
import { queriesModule } from './queries/queries.module';
import { productsModule } from './product/product.module';
import { reviewsModule } from './reviews/reviews.module';
import { contactModule } from './contact/contact.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({type: 'mysql',
       host: 'localhost',
       port: 3306,
       username: 'root',
       password: 'MacsofTechnologies',
       database: 'vyasyarajuJewellery',
      //logging:true,
      synchronize: true,
      autoLoadEntities: true,
     // keepConnectionAlive: true,
      //insecureAuth : true
   }),
      userRegisterModule,
      queriesModule,
      productsModule,
      reviewsModule,
      contactModule
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
