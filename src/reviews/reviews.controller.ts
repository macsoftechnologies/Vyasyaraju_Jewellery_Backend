import { HttpStatus, Post, Request, Res } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ReviewsDto } from './dto/review.dto';
import { Reviews } from './entity/review.entity';
import { ReviewsService } from './reviews.service';
import { Response } from 'express'
@Controller('reviews')
export class ReviewsController {
    constructor(private reviewsService: ReviewsService){}
    
    @Post()
    async create(
      @Request() req,
      @Body() body: ReviewsDto,
      @Res() res: Response
      
    ) {
      try {
        const response = await this.reviewsService.queries(body);
  
        return res.send(response);
      } catch (error) {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message,
        };
      }
    }
    /* @Post()
    create(@Body() reviewsDto: ReviewsDto): Promise<Reviews> {
      return this.reviewsService.usersReview(reviewsDto);
    }*/
}
