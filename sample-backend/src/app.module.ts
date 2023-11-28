import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
