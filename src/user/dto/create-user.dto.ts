import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Jamalovn07@gmail.com',
    description: 'User email',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: '******',
    description: 'User password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'John Mackenzie',
    description: 'User full name',
  })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({
    example: '998949174127',
    description: 'user phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: 'link',
    description: 'User photo link',
  })
  @IsNotEmpty()
  @IsString()
  photo: string;
  @ApiProperty({
    example: '.....',
    description: 'User cv link',
  })
  @IsNotEmpty()
  @IsString()
  cv_link: string;

  @ApiProperty({
    example: '01-01-2000',
    description: 'User birth date',
  })
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty({
    example: 'my address',
    description: 'User address',
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}
