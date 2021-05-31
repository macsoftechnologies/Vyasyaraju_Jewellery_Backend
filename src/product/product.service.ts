import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { ProductDetailsDto } from './dto/product.dto';
import { Products } from './entity/product.entity';

@Injectable()
export class ProductService {
    constructor(    @InjectRepository(Products)
    private ProductsRepository: Repository<Products>) { }
  /* async createProduct(productDetailsDto: ProductDetailsDto): Promise<Products> {
        const products = new Products();
        products.Product_Name = productDetailsDto.Product_Name
        products.Product_Price = productDetailsDto.Product_Price;
        products.Product_Description = productDetailsDto.Product_Description;
        
        return this.ProductsRepository.save(products);
      }*/
      async createProduct(params: any) {
      try {
        console.log(params);
        const productAdded = await getRepository(Products).save({
          IsDeleted: 0,
          ...params,
        });
  
        return { statusCode: HttpStatus.OK, message: 'Ok', data: productAdded };
      } catch (error) {
        console.log(error);
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }

}
