import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Social } from './entities/social.entity';

@Injectable()
export class SocialsService {
  constructor(@InjectModel(Social) private socialRepo: typeof Social) {}
  async create(createSocialDto: CreateSocialDto) {
    const candidate = await this.socialRepo.findOne({
      where: { name: createSocialDto.name },
    });
    if (candidate) {
      throw new BadRequestException('social already exists');
    }
    const social = await this.socialRepo.create(createSocialDto);
    return social;
  }

  async findAll() {
    const socials = await this.socialRepo.findAll();
    if (!socials.length) {
      throw new BadRequestException('socials not found');
    }
    return socials;
  }

  async findOne(id: number) {
    const social = await this.socialRepo.findOne({ where: { id } });
    if (!social) {
      throw new BadRequestException('social not found');
    }
    return social;
  }

  async update(id: number, updateSocialDto: UpdateSocialDto) {
    const social = await this.findOne(id);

    const candidate = await this.socialRepo.findOne({
      where: { name: updateSocialDto.name },
    });
    if (candidate) {
      throw new BadRequestException('social already exists');
    }

    await social.update(updateSocialDto);
    return social;
  }

  async remove(id: number) {
    const social = await this.findOne(id);
    await this.socialRepo.destroy({ where: { id } });
    return social;
  }
}
