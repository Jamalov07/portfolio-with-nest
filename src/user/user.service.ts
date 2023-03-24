import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepo: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    const users = await this.userRepo.findAll();
    if (users.length) {
      throw new BadRequestException('User already exists');
    }
    const user = await this.userRepo.create(createUserDto);
    return user;
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('user not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('user not found');
    }
    await user.update(updateUserDto);
    return user;
  }
}
