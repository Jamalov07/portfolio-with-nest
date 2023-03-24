import { PostTag } from './../../post-tags/entities/post-tag.entity';
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

interface TagAttr {
  name: string;
}

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag, TagAttr> {
  @ApiProperty({
    example: 1,
    description: 'Tag id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'VUE',
    description: 'Tag name',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => ProjectTag)
  project_tags: ProjectTag[];

  @HasMany(() => PostTag)
  post_tags: PostTag[];
}
