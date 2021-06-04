import { Controller, Post, Request, Body, Res, HttpStatus, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { ImagesService } from './images.service';
import { displayImagesDto } from './dto/images.dto';
@Controller('images')
export class ImagesController {
    constructor(private imagesService:ImagesService){}
        
        @Post()
        @UseInterceptors(FileInterceptor('addImage', {
            storage: diskStorage({
                destination: './files',
            })
        }))
       async create(@UploadedFiles() addImage,
                    @Request() req,
                    @Body() body: displayImagesDto,
                    @Res() res: Response){
                try {

                    const response = await this.imagesService.imageAdded(
                        body,
                        addImage
                      );
                    console.log(response);
                      return res.status(response.statusCode).send(response);
                    } catch (error) {
                      return {
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: error.message,
                      };
                    }
                  }
             
        }
    
