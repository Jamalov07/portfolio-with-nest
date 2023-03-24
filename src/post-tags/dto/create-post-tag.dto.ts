import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreatePostTagDto {
  @ApiProperty({
    example: 1,
    description: 'post id',
  })
  @IsNotEmpty()
  @IsNumber()
  post_id: number;
  @ApiProperty({
    example: 2,
    description: 'tag id',
  })
  @IsNotEmpty()
  @IsNumber()
  tag_id: number;
}
