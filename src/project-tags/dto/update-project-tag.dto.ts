import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProjectTagDto {
  @ApiProperty({
    example: 1,
    description: 'project id',
  })
  @IsNotEmpty()
  @IsNumber()
  project_id: number;
  @ApiProperty({
    example: 2,
    description: 'tag id',
  })
  @IsNotEmpty()
  @IsNumber()
  tag_id: number;
}
