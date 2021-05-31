import { ApiProperty } from '@nestjs/swagger';

export class ProductDetailsDto {

  @ApiProperty()
  Product_Name: string;

  @ApiProperty()
  Product_Price: string;

  @ApiProperty()
  Product_Description: string;

}
