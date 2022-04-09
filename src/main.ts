import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './modules/prisma/prisma.service';

async function bootstrap() {
  console.clear();

  const port: number = 3000;
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  await app.listen(port);

  console.log(`Listening on Port: ${port}`)
}
bootstrap();
