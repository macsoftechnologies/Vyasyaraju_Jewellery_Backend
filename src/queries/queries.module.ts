import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Queries } from './entity/queries.entity';
import { QueriesController } from './queries.controller';
import { QueriesService } from './queries.service';


@Module({
  imports:  [TypeOrmModule.forFeature([Queries])],
  controllers: [QueriesController],
  providers: [QueriesService],
  exports: [TypeOrmModule],
})
export class queriesModule {}