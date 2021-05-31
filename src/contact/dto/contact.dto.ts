import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {

  @ApiProperty()
  Name: string;

  @ApiProperty()
  Email: string;

  @ApiProperty()
  Phone_Number: string;

  @ApiProperty()
  Message: string;
}
