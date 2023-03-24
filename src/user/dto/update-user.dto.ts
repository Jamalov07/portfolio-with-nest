import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'Jamalovn07@gmail.com',
    description: 'User email',
  })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    example: '******',
    description: 'User password',
  })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'John Mackenzie',
    description: 'User full name',
  })
  @IsOptional()
  @IsString()
  full_name: string;

  @ApiProperty({
    example: '998949174127',
    description: 'user phone number',
  })
  @IsOptional()
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: 'link',
    description: 'User photo link',
  })
  @IsOptional()
  @IsString()
  photo: string;
  @ApiProperty({
    example: '.....',
    description: 'User cv link',
  })
  @IsOptional()
  @IsString()
  cv_link: string;

  @ApiProperty({
    example: '01-01-2000',
    description: 'User birth date',
  })
  @IsOptional()
  @IsDateString()
  birth_date: Date;

  @ApiProperty({
    example: 'my address',
    description: 'User address',
  })
  @IsOptional()
  @IsString()
  address: string;
}
