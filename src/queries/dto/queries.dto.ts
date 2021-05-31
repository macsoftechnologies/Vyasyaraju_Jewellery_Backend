import { ApiProperty } from '@nestjs/swagger';

export class QueriesDto {

  @ApiProperty()
  Name: string;

  @ApiProperty()
  Question: string;

}
