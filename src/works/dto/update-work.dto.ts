import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateWorkDto {
  @ApiProperty({
    example: 'najot talim',
    description: 'company name',
  })
  @IsOptional()
  @IsString()
  company_name: string;

  @ApiProperty({
    example: '12-12-2012',
    description: 'from date',
  })
  @IsOptional()
  @IsDateString()
  from: Date;

  @ApiProperty({
    example: '12-12-2019',
    description: 'to date',
  })
  @IsOptional()
  @IsDateString()
  to: Date;

  @ApiProperty({
    example: 'Full stack developer',
    description: 'position',
  })
  @IsOptional()
  @IsString()
  position: string;
}
