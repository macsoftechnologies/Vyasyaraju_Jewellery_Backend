import { ApiProperty } from '@nestjs/swagger';

export class ReviewsDto {

  
  @ApiProperty()
  Rating: number;

  @ApiProperty()
  Nick_Name: string;
  
  @ApiProperty()
  Summary: string;

  @ApiProperty()
  Review: string;


}
