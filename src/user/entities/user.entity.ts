import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';

interface UserAttr {
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
  photo: string;
  cv_link: string;
  birth_date: Date;
  address: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserAttr> {
  @ApiProperty({
    example: 1,
    description: 'User id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'Jamalovn07@gmail.com',
    description: 'User email',
  })
  @Column({ type: DataType.STRING })
  email: string;

  @ApiProperty({
    example: '******',
    description: 'User password',
  })
  @Column({ type: DataType.STRING })
  password: string;

  @ApiProperty({
    example: 'John Mackenzie',
    description: 'User full name',
  })
  @Column({ type: DataType.STRING })
  full_name: string;

  @ApiProperty({
    example: '998949174127',
    description: 'user phone number',
  })
  @Column({ type: DataType.STRING })
  phone_number: string;

  @ApiProperty({
    example: 'link',
    description: 'User photo link',
  })
  @Column({ type: DataType.STRING })
  photo: string;
  @ApiProperty({
    example: '.....',
    description: 'User cv link',
  })
  @Column({ type: DataType.STRING })
  cv_link: string;

  @ApiProperty({
    example: '01-01-2000',
    description: 'User birth date',
  })
  @Column({ type: DataType.DATE })
  birth_date: Date;

  @ApiProperty({
    example: 'my address',
    description: 'User address',
  })
  @Column({ type: DataType.STRING })
  address: string;
}
