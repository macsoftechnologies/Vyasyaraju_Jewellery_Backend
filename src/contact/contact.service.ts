import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './entity/contact.entity';

@Injectable()
export class ContactService {
    constructor(    @InjectRepository(Contact)
    private ContactRepository: Repository<Contact>) { }

    async createProduct(params: any) {
      try {
        console.log(params);
        const contactUs = await getRepository(Contact).save({
          IsDeleted: 0,
          ...params,
        });
  
        return { statusCode: HttpStatus.OK, message: 'Ok', data: contactUs };
      } catch (error) {
        console.log(error);
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }
   /* contactUs(contactDto: ContactDto): Promise<Contact> {
        const contact = new Contact();
        contact.Name = contactDto.Name
        contact.Email = contactDto.Email;;
        contact.Phone_Number = contactDto.Phone_Number;
        contact.Message= contactDto.Message;
        
        return this.ContactRepository.save(contact);
      }*/

    

}
