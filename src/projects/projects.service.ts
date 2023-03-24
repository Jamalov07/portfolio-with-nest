import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project) private projectRepo: typeof Project) {}
  async create(createProjectDto: CreateProjectDto) {
    const candidate = await this.projectRepo.findOne({
      where: { name: createProjectDto.name },
    });
    if (candidate) {
      throw new BadRequestException('project already exists');
    }
    const project = await this.projectRepo.create(createProjectDto);
    return project;
  }

  async findAll() {
    const projects = await this.projectRepo.findAll();
    if (!projects.length) {
      throw new BadRequestException('projects not found');
    }
    return projects;
  }

  async findOne(id: number) {
    const project = await this.projectRepo.findOne({ where: { id } });
    if (!project) {
      throw new BadRequestException('project not found');
    }
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);

    const candidate = await this.projectRepo.findOne({
      where: { name: updateProjectDto.name },
    });
    if (candidate) {
      throw new BadRequestException('project already exists');
    }

    await project.update(updateProjectDto);
    return project;
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    await this.projectRepo.destroy({ where: { id } });
    return project;
  }
}
