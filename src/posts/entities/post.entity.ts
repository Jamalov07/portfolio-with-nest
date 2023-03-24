import { PostTag } from './../../post-tags/entities/post-tag.entity';
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

interface PostAttr {
  title: string;
  content: string;
}

@Table({ tableName: 'post' })
export class Post extends Model<Post, PostAttr> {
  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'post title',
    description: 'title',
  })
  @Column({ type: DataType.STRING })
  title: string;
  @ApiProperty({
    example: 'post content',
    description: 'content',
  })
  @Column({ type: DataType.STRING })
  content: string;

  @HasMany(() => PostTag)
  post_tags: PostTag[];
}
