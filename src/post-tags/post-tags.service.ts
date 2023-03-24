import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostTagDto } from './dto/create-post-tag.dto';
import { UpdatePostTagDto } from './dto/update-post-tag.dto';
import { PostTag } from './entities/post-tag.entity';

@Injectable()
export class PostTagsService {
  constructor(@InjectModel(PostTag) private posttagRepo: typeof PostTag) {}
  async create(createPostTagDto: CreatePostTagDto) {
    const candidate = await this.posttagRepo.findOne({
      where: {
        post_id: createPostTagDto.post_id,
        tag_id: createPostTagDto.tag_id,
      },
    });
    if (candidate) {
      throw new BadRequestException('posttag already exists');
    }
    const posttag = await this.posttagRepo.create(createPostTagDto);
    return posttag;
  }

  async findAll() {
    const posttags = await this.posttagRepo.findAll();
    if (!posttags.length) {
      throw new BadRequestException('projects not found');
    }
    return posttags;
  }

  async findOne(id: number) {
    const posttag = await this.posttagRepo.findOne({ where: { id } });
    if (!posttag) {
      throw new BadRequestException('project not found');
    }
    return posttag;
  }

  async update(id: number, updatePostTagDto: UpdatePostTagDto) {
    const posttag = await this.findOne(id);

    const candidate = await this.posttagRepo.findOne({
      where: {
        post_id: updatePostTagDto.post_id,
        tag_id: updatePostTagDto.tag_id,
      },
    });
    if (candidate) {
      throw new BadRequestException('project already exists');
    }

    await posttag.update(updatePostTagDto);
    return posttag;
  }

  async remove(id: number) {
    const posttag = await this.findOne(id);
    await this.posttagRepo.destroy({ where: { id } });
    return posttag;
  }
}
