import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Post } from '../../posts/entities/post.entity';
import { Tag } from '../../tags/entities/tag.entity';

interface PostTagAttr {
  post_id: number;
  tag_id: number;
}

@Table({ tableName: 'posttag' })
export class PostTag extends Model<PostTag, PostTagAttr> {
  @ApiProperty({
    example: 1,
    description: 'PostTag id',
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
    description: 'post id',
  })
  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER })
  post_id: number;
  @BelongsTo(() => Post)
  post: Post;

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
