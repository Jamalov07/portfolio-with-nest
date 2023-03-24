import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';
export class UpdatePostTagDto {
  @ApiProperty({
    example: 1,
    description: 'post id',
  })
  @IsOptional()
  @IsNumber()
  post_id: number;
  @ApiProperty({
    example: 2,
    description: 'tag id',
  })
  @IsOptional()
  @IsNumber()
  tag_id: number;
}
