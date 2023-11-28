import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserDTO } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('analytics')
  analytics(data: CreateUserDTO) {
    console.log('analytics from  analytics microservices', data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    console.log('getting analytics microservices');
    return 1;
  }
}
