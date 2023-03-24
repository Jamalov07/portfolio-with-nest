import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkDto {
  @ApiProperty({
    example: 'najot talim',
    description: 'company name',
  })
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @ApiProperty({
    example: '12-12-2012',
    description: 'from date',
  })
  @IsNotEmpty()
  @IsDateString()
  from: Date;

  @ApiProperty({
    example: '12-12-2019',
    description: 'to date',
  })
  @IsNotEmpty()
  @IsDateString()
  to: Date;

  @ApiProperty({
    example: 'Full stack developer',
    description: 'position',
  })
  @IsNotEmpty()
  @IsString()
  position: string;
}
