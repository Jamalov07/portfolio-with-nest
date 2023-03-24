import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTagDto {
  @ApiProperty({
    example: 'VUE',
    description: 'Tag name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
