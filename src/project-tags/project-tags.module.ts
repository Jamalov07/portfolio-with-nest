import { Module } from '@nestjs/common';
import { ProjectTagsService } from './project-tags.service';
import { ProjectTagsController } from './project-tags.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectTag } from './entities/project-tag.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProjectTag])],
  controllers: [ProjectTagsController],
  providers: [ProjectTagsService],
})
export class ProjectTagsModule {}
