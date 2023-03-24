import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateProjectDto {
  @ApiProperty({
    example: 'CRM',
    description: 'project name',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'about project',
    description: 'project description',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    example: '.....',
    description: 'project link',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    example: 1,
    description: 'work id',
  })
  @IsOptional()
  @IsNumber()
  work_id: number;
}
