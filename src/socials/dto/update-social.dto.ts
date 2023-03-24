import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSocialDto {
  @ApiProperty({
    example: 'VUE',
    description: 'Social name',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    example: '@New_Prime_Minister_of_Uzbekistan',
    description: 'Social url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    example: 'bxs-facebook',
    description: 'Social icon',
  })
  @IsOptional()
  @IsString()
  icon: string;
}
