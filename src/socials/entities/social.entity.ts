import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';

interface SocialAttr {
  name: string;
  url: string;
  icon: string;
}

@Table({ tableName: 'social' })
export class Social extends Model<Social, SocialAttr> {
  @ApiProperty({
    example: 1,
    description: 'Social id',
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
    description: 'Social name',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: '@New_Prime_Minister_of_Uzbekistan',
    description: 'Social url',
  })
  @Column({ type: DataType.STRING })
  url: string;

  @ApiProperty({
    example: 'bxs-facebook',
    description: 'Social icon',
  })
  @Column({ type: DataType.STRING })
  icon: string;
}
