import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { Subscribe } from './entities/subscribe.entity';


@Injectable()
export class SubscribeService {
  constructor(    @InjectRepository(Subscribe)
  private UsersRegisterRepository: Repository<Subscribe>) { }
      async createUser(params: any) {
          try {
            console.log(params);
            const SubscribedUser = await getRepository(Subscribe).save({
              IsDeleted: 0,
              ...params,
            });
      
            return { statusCode: HttpStatus.OK, message: 'Ok', data: SubscribedUser };
          } catch (error) {
            console.log(error);
            return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
            };
             }
     }
    }
    
