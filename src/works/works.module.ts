import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Work } from './entities/work.entity';

@Module({
  imports: [SequelizeModule.forFeature([Work])],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}
