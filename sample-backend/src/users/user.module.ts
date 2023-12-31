import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMMUNICATIONS',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'ANALYTICS',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [ClientsModule],
})
export class UserModule {}
