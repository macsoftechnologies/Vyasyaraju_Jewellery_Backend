import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';



@Module({
  imports:  [TypeOrmModule.forFeature([Products])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [TypeOrmModule],
})
export class productsModule {}