import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { displayImages } from './entity/images.entity';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';




@Module({
  imports:  [TypeOrmModule.forFeature([displayImages])],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [TypeOrmModule],
})
export class imagesModule {}