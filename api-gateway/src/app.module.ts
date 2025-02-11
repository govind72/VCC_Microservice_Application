import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3001 } },
      { name: 'BOOK_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3002 } },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
