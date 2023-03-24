import { ProjectTag } from './../../project-tags/entities/project-tag.entity';
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
import { Work } from '../../works/entities/work.entity';

interface ProjectAttr {
  name: string;
  description: string;
  url: string;
  work_id: number;
}

@Table({ tableName: 'Project' })
export class Project extends Model<Project, ProjectAttr> {
  @ApiProperty({
    example: 1,
    description: 'Project id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'CRM',
    description: 'project name',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: 'about project',
    description: 'project description',
  })
  @Column({ type: DataType.TEXT })
  description: string;

  @ApiProperty({
    example: '.....',
    description: 'project link',
  })
  @Column({ type: DataType.STRING })
  url: string;

  @ApiProperty({
    example: 1,
    description: 'work id',
  })
  @ForeignKey(() => Work)
  @Column({ type: DataType.INTEGER })
  work_id: number;
  @BelongsTo(() => Work)
  work: Work;

  @HasMany(() => ProjectTag)
  project_tags: ProjectTag[];
}
