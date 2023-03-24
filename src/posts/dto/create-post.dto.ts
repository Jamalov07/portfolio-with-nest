import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'post title',
    description: 'title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty({
    example: 'post content',
    description: 'content',
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}
