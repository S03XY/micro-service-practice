import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATIONS') private readonly communicationProxy: ClientProxy,
  ) {}
  getHello() {
    console.log('saying hello from sample backend');
    this.communicationProxy.emit('hello', { text: 'hello' });
  }
}
