import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag) private tagRepo: typeof Tag) {}
  async create(createTagDto: CreateTagDto) {
    const candidate = await this.tagRepo.findOne({
      where: { name: createTagDto.name },
    });
    if (candidate) {
      throw new BadRequestException('tag already exists');
    }
    const tag = await this.tagRepo.create(createTagDto);
    return tag;
  }

  async findAll() {
    const tags = await this.tagRepo.findAll();
    if (!tags.length) {
      throw new BadRequestException('tags not found');
    }
    return tags;
  }

  async findOne(id: number) {
    const tag = await this.tagRepo.findOne({ where: { id } });
    if (!tag) {
      throw new BadRequestException('tag not found');
    }
    return tag;
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.findOne(id);

    const candidate = await this.tagRepo.findOne({
      where: { name: updateTagDto.name },
    });
    if (candidate) {
      throw new BadRequestException('tag already exists');
    }

    await tag.update(updateTagDto);
    return tag;
  }

  async remove(id: number) {
    const tag = await this.findOne(id);
    await this.tagRepo.destroy({ where: { id } });
    return tag;
  }
}
