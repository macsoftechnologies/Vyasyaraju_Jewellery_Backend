import { HttpStatus, Post, Request, Res } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './entity/contact.entity';
import { Response } from 'express'
@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService){}
    @Post()
    
    async create(
      @Request() req,
      @Body() body: ContactDto,
      @Res() res: Response
      
    ) {
      try {
        const response = await this.contactService.createProduct(body);
  
        return res.send(response);
      } catch (error) {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }
  }

    /*create(@Body() contactDto: ContactDto): Promise<Contact> {
      return this.contactService.contactUs(contactDto);
    }*/

