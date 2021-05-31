import { Controller, Post, Body, Request, Res } from '@nestjs/common';
import { QueriesDto } from './dto/queries.dto';
import { Queries } from './entity/queries.entity';
import { QueriesService } from './queries.service';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';
@Controller('queries')
export class QueriesController {
    constructor(private queriesService: QueriesService){}
  @Post()
    async create(
      @Request() req,
      @Body() body: QueriesDto,
      @Res() res: Response
      
    ) {
      try {
        const response = await this.queriesService.queries(body);
  
        return res.send(response);
      } catch (error) {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }
    /*  @Post()
    create(@Body() queriesDto: QueriesDto): Promise<Queries> {
      return this.queriesService.createUser(queriesDto);
    }*/
}
