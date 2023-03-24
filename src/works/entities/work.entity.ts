import { Project } from './../../projects/entities/project.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

interface WorkAttr {
  company_name: string;
  from: Date;
  to: Date;
  position: string;
}

@Table({ tableName: 'work' })
export class Work extends Model<Work, WorkAttr> {
  @ApiProperty({
    example: 1,
    description: 'Work id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'najot talim',
    description: 'company name',
  })
  @Column({ type: DataType.STRING })
  company_name: string;

  @ApiProperty({
    example: '12-12-2012',
    description: 'from date',
  })
  @Column({ type: DataType.DATE })
  from: Date;

  @ApiProperty({
    example: '12-12-2019',
    description: 'to date',
  })
  @Column({ type: DataType.DATE })
  to: Date;

  @ApiProperty({
    example: 'Full stack developer',
    description: 'position',
  })
  @Column({ type: DataType.STRING })
  position: string;

  @HasMany(() => Project)
  projects: Project[];
}
