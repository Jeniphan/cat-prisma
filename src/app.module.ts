import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './modules/prisma/prisma.service';
import { UserService } from './modules/user/user.service';
import { PostService } from './modules/post/post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}
