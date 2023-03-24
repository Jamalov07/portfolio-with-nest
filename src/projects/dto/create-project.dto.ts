import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    example: 'CRM',
    description: 'project name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'about project',
    description: 'project description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: '.....',
    description: 'project link',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    example: 1,
    description: 'work id',
  })
  @IsNotEmpty()
  @IsNumber()
  work_id: number;
}
