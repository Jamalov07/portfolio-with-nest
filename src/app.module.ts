import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { WorksModule } from './works/works.module';
import { SocialsModule } from './socials/socials.module';
import { PostsModule } from './posts/posts.module';
import { ProjectTagsModule } from './project-tags/project-tags.module';
import { TagsModule } from './tags/tags.module';
import { PostTagsModule } from './post-tags/post-tags.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostTag } from './post-tags/entities/post-tag.entity';
import { Post } from './posts/entities/post.entity';
import { ProjectTag } from './project-tags/entities/project-tag.entity';
import { Project } from './projects/entities/project.entity';
import { Social } from './socials/entities/social.entity';
import { Tag } from './tags/entities/tag.entity';
import { User } from './user/entities/user.entity';
import { Work } from './works/entities/work.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [PostTag, Post, ProjectTag, Project, Social, Tag, User, Work],
      autoLoadModels: true,
      logging: false,
    }),
    ProjectsModule,
    WorksModule,
    SocialsModule,
    PostsModule,
    ProjectTagsModule,
    TagsModule,
    PostTagsModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
