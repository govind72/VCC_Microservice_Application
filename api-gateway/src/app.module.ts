import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP, options: { host: '10.0.2.11', port: 3001 } },
      { name: 'BOOK_SERVICE', transport: Transport.TCP, options: { host: '10.0.2.13', port: 3002 } },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
