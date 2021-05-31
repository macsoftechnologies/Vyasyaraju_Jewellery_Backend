import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { QueriesDto } from './dto/queries.dto';
import { Queries } from './entity/queries.entity';
@Injectable()
export class QueriesService {
    constructor(    @InjectRepository(Queries)
    private QueriesRepository: Repository<Queries>) { }
    /*createUser(queriesDto: QueriesDto): Promise<Queries> {
        const queries = new Queries();
        queries.Name = queriesDto.Name;
        queries.Question = queriesDto.Question;
        
        return this.QueriesRepository.save(queries);
      }*/

      async queries(params: any) {
        try {
          console.log(params);
          const usersQuery = await getRepository(Queries).save({
            IsDeleted: 0,
            ...params,
          });
    
          return { statusCode: HttpStatus.OK, message: 'Ok', data: usersQuery };
        } catch (error) {
          console.log(error);
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
        }
      }
  
    
}
