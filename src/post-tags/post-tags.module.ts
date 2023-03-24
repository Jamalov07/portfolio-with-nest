import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { PostTagsService } from './post-tags.service';
import { PostTagsController } from './post-tags.controller';
import { PostTag } from './entities/post-tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([PostTag])],
  controllers: [PostTagsController],
  providers: [PostTagsService],
})
export class PostTagsModule {}
