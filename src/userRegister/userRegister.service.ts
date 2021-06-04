import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { loginDto, UserRegisterDto } from './dto/userRegister.dto';
import {  Register } from './entity/userRegister.entity';
import { getRepository, Repository } from 'typeorm';
 @Injectable()
 export class RegisterService {
    constructor(  @InjectRepository(Register)
    private UsersRegisterRepository: Repository<Register>) { }
        async createUser(params: any) {
            try {
              console.log(params);
              const usersRegister = await getRepository(Register).save({
              });
              return { statusCode: HttpStatus.OK, message: 'Ok', data: usersRegister };
                } 
            catch (error) {
              console.log(error);
              return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
                };
               }
              }

      async findOne(body: loginDto) {
        try {
          console.log(body);
          const user = await this.UsersRegisterRepository
            .createQueryBuilder('user')
            .where(`(user.PhoneNumber= :LoginId OR user.Email= :LoginId) AND (user.Password= :Password)`,body)
            .getOne();
    
          if (user) {
            
            return { statusCode: HttpStatus.OK, message: 'Login Sucessfull', data: user };
         }
    
          return {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'User Not Found',
          };
        } catch (error) {
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
        }
      }   
    }
    
   

