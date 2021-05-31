import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDto {

  @ApiProperty()
  Email: string;

  @ApiProperty()
  PhoneNumber: string;
 
  @ApiProperty()
  Password: string;

  @ApiProperty()
  ConfirmPassword:string
  

}
