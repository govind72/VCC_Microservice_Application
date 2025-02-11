import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 3002 },
  });

  await app.listen();
  console.log('Book Service is running on TCP port 3002');
}
bootstrap();
