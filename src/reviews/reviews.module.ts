import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews } from './entity/review.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';


@Module({
  imports:  [TypeOrmModule.forFeature([Reviews])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [TypeOrmModule],
})
export class reviewsModule {}