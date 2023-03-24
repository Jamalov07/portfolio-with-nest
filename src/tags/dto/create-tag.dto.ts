import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: 'VUE',
    description: 'Tag name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
