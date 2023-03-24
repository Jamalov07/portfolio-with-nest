import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @ApiProperty({
    example: 'post title',
    description: 'title',
  })
  @IsOptional()
  @IsString()
  title: string;
  @ApiProperty({
    example: 'post content',
    description: 'content',
  })
  @IsOptional()
  @IsString()
  content: string;
}
