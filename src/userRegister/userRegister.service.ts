import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from './dto/userRegister.dto';
import {  Register } from './entity/userRegister.entity';
import { getRepository, Repository } from 'typeorm';
@Injectable()
export class RegisterService {
    constructor(    @InjectRepository(Register)
    private UsersRegisterRepository: Repository<Register>) { }
        async createUser(params: any) {
            try {
              console.log(params);
              const usersRegister = await getRepository(Register).save({
                IsDeleted: 0,
                ...params,
              });
        
              return { statusCode: HttpStatus.OK, message: 'Ok', data: usersRegister };
            } catch (error) {
              console.log(error);
              return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
              };
               }
       }
       
    }
  
       
       
      
       /* const usersRegister = new Register();
        usersRegister.Email = userRegisterDto.Email;
        usersRegister.PhoneNumber = userRegisterDto.PhoneNumber;
        usersRegister.Password= userRegisterDto.Password;
        usersRegister.ConfirmPassword= userRegisterDto.ConfirmPassword;
    
        return this.UsersRegisterRepository.save(usersRegister);
      }*/
    
   

