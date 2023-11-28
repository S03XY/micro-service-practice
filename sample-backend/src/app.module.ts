import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
