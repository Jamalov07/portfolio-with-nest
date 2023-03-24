import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Project } from '../../projects/entities/project.entity';
import { Tag } from '../../tags/entities/tag.entity';

interface ProjectTagAttr {
  project_id: number;
  tag_id: number;
}

@Table({ tableName: 'projecttag' })
export class ProjectTag extends Model<ProjectTag, ProjectTagAttr> {
  @ApiProperty({
    example: 1,
    description: 'ProjectTag id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'project id',
  })
  @ForeignKey(() => Project)
  @Column({ type: DataType.INTEGER })
  project_id: number;
  @BelongsTo(() => Project)
  project: Project;

  @ApiProperty({
    example: 2,
    description: 'tag id',
  })
  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER })
  tag_id: number;
  @BelongsTo(() => Tag)
  tag: Tag;
}
