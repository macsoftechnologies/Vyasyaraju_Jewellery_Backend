import { Controller, Post, Body, HttpStatus, Request, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { loginDto, subscribeDto, UserRegisterDto } from './dto/userRegister.dto';
import { Register } from './entity/userRegister.entity';
import { RegisterService } from './userRegister.service';
import { Response } from 'express';
@Controller('register')
export class RegisterController {
   constructor(private registerservice: RegisterService) {}
  

   @Post()
   async create(
     @Request() req,
     @Body() body: UserRegisterDto,
     @Res() res: Response
     
   ) {
     try {
       const response = await this.registerservice.createUser(body);
 
       return res.send(response);
     } catch (error) {
       return {
         status: HttpStatus.INTERNAL_SERVER_ERROR,
         message: error.message,
       };
     }
   }

 
  @Post('/login')
  async login(@Body() body: loginDto, @Res() res: Response) {
    try {
      const response = await this.registerservice.findOne(body);
      return res.status(200).send(response);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
      /*  @Post('/create')
    async create(@Body() userData: UsersRegister): Promise<any> {
      return this.registerservice.createUser(userData);
    } */
