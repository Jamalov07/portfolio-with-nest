import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectTagDto } from './dto/create-project-tag.dto';
import { UpdateProjectTagDto } from './dto/update-project-tag.dto';
import { ProjectTag } from './entities/project-tag.entity';

@Injectable()
export class ProjectTagsService {
  constructor(
    @InjectModel(ProjectTag) private projecttagRepo: typeof ProjectTag,
  ) {}
  async create(createProjectTagDto: CreateProjectTagDto) {
    const candidate = await this.projecttagRepo.findOne({
      where: {
        project_id: createProjectTagDto.project_id,
        tag_id: createProjectTagDto.tag_id,
      },
    });
    if (candidate) {
      throw new BadRequestException('projecttag already exists');
    }
    const projecttag = await this.projecttagRepo.create(createProjectTagDto);
    return projecttag;
  }

  async findAll() {
    const projecttags = await this.projecttagRepo.findAll();
    if (!projecttags.length) {
      throw new BadRequestException('projects not found');
    }
    return projecttags;
  }

  async findOne(id: number) {
    const projecttag = await this.projecttagRepo.findOne({ where: { id } });
    if (!projecttag) {
      throw new BadRequestException('project not found');
    }
    return projecttag;
  }

  async update(id: number, updateProjectTagDto: UpdateProjectTagDto) {
    const projecttag = await this.findOne(id);

    const candidate = await this.projecttagRepo.findOne({
      where: {
        project_id: updateProjectTagDto.project_id,
        tag_id: updateProjectTagDto.tag_id,
      },
    });
    if (candidate) {
      throw new BadRequestException('project already exists');
    }

    await projecttag.update(updateProjectTagDto);
    return projecttag;
  }

  async remove(id: number) {
    const projecttag = await this.findOne(id);
    await this.projecttagRepo.destroy({ where: { id } });
    return projecttag;
  }
}
