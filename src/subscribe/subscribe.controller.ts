import { Controller, Get, Post, Body, Patch, Param, Delete,Request, Res, HttpStatus } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { Response } from 'express';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  async subscribe(
    @Request() req,
    @Body() body: CreateSubscribeDto,
    @Res() res: Response
    
  ) {
    try {
      const response = await this.subscribeService.createUser(body);

      return res.send(response);
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
} 

 