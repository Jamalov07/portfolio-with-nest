import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSocialDto {
  @ApiProperty({
    example: 'VUE',
    description: 'Social name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '@New_Prime_Minister_of_Uzbekistan',
    description: 'Social url',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    example: 'bxs-facebook',
    description: 'Social icon',
  })
  @IsNotEmpty()
  @IsString()
  icon: string;
}
