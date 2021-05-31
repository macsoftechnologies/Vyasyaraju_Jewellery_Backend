import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './entity/userRegister.entity';
import { RegisterController } from './userRegister.controller';
import { RegisterService } from './userRegister.service';

@Module({
  imports:  [TypeOrmModule.forFeature([Register])],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [TypeOrmModule],
})
export class userRegisterModule {}