import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepo: typeof Post) {}
  async create(createPostDto: CreatePostDto) {
    const candidate = await this.postRepo.findOne({
      where: { title: createPostDto.title },
    });
    if (candidate) {
      throw new BadRequestException('post already exists');
    }
    const post = await this.postRepo.create(createPostDto);
    return post;
  }

  async findAll() {
    const posts = await this.postRepo.findAll();
    if (!posts.length) {
      throw new BadRequestException('posts not found');
    }
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepo.findOne({ where: { id } });
    if (!post) {
      throw new BadRequestException('post not found');
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);

    const candidate = await this.postRepo.findOne({
      where: { title: updatePostDto.title },
    });
    if (candidate) {
      throw new BadRequestException('post already exists');
    }

    await post.update(updatePostDto);
    return post;
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    await this.postRepo.destroy({ where: { id } });
    return post;
  }
}
