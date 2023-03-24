import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './entities/work.entity';

@Injectable()
export class WorksService {
  constructor(@InjectModel(Work) private workRepo: typeof Work) {}
  async create(createWorkDto: CreateWorkDto) {
    const candidate = await this.workRepo.findOne({
      where: { company_name: createWorkDto.company_name },
    });
    if (candidate) {
      throw new BadRequestException('Company already exists');
    }
    const work = await this.workRepo.create(createWorkDto);
    return work;
  }

  async findAll() {
    const works = await this.workRepo.findAll();
    if (!works.length) {
      throw new BadRequestException('Works not found');
    }
    return works;
  }

  async findOne(id: number) {
    const work = await this.workRepo.findOne({ where: { id } });
    if (!work) {
      throw new BadRequestException('Work not found');
    }
    return work;
  }

  async update(id: number, updateWorkDto: UpdateWorkDto) {
    const work = await this.findOne(id);
    if (updateWorkDto.company_name) {
      const candidate = await this.workRepo.findOne({
        where: { company_name: updateWorkDto.company_name },
      });
      if (candidate) {
        throw new BadRequestException('Company already exists');
      }
    }
    await work.update(updateWorkDto);
    return work;
  }

  async remove(id: number) {
    const work = await this.findOne(id);
    await this.workRepo.destroy({ where: { id } });
    return work;
  }
}
