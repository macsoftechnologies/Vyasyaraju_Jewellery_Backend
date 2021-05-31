import { Controller, Post, Body, Res, HttpStatus, Req,  Request } from '@nestjs/common';
import { ProductDetailsDto } from './dto/product.dto';
import { Products } from './entity/product.entity';
import { ProductService } from './product.service';
import { Response } from 'express';
@Controller('product')
export class ProductController {
    
    constructor(private productService: ProductService){}
    @Post()
    async create(
      @Request() req,
      @Body() body: ProductDetailsDto,
      @Res() res: Response
      
    ) {
      try {
        const response = await this.productService.createProduct(body);
  
        return res.send(response);
      } catch (error) {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }
   /* @Post()
    create(@Body() productDetailsDto: ProductDetailsDto): Promise<Products> {
      return this.productService.createProduct(productDetailsDto);
    }*/
  






  }

