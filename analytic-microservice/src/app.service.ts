import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getAnalytics() {
  //   console.log('from analytics service');
  //   return 1;
  // }
}
