import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { displayImages } from './entity/images.entity';


@Injectable()
export class ImagesService {
    constructor(    @InjectRepository(displayImages)
    private ContactRepository: Repository<displayImages>) { }

    async imageAdded(body:displayImages, addImage) {
        try {
          console.log(body);
          const saveImage = await getRepository(displayImages).save(addImage)
            // IsDeleted: 0,
            // ...params,
          
    
          return { statusCode: HttpStatus.OK, message: 'Ok', data: saveImage };
        } catch (error) {
          console.log(error);
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
        }
      }
    }
    
  