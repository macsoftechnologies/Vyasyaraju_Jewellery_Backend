import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/entity/product.entity';
import { getRepository, Repository } from 'typeorm';
import { ReviewsDto } from './dto/review.dto';
import { Reviews } from './entity/review.entity';

@Injectable()
export class ReviewsService {
    constructor(    @InjectRepository(Reviews)
    private ReviewsRepository: Repository<Reviews>) { }
   /* usersReview(reviewsDto: ReviewsDto): Promise<Reviews> {
        const reviews = new Reviews();
        reviews.Rating = reviewsDto.Rating;
        reviews.Nick_Name = reviewsDto.Nick_Name;
        reviews.Summary= reviewsDto.Summary;
        reviews.Review= reviewsDto.Review;
        
        return this.ReviewsRepository.save(reviews);
      } */

      async queries(params: any) {
        try {
          console.log(params);
          const RatingsReview = await getRepository(Reviews).save({
            IsDeleted: 0,
            ...params,
          });
    
          return { statusCode: HttpStatus.OK, message: 'Ok', data: RatingsReview };
        } catch (error) {
          console.log(error);
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
           }
   }
}
