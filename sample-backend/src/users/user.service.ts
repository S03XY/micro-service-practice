import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('COMMUNICATIONS') private readonly communicationProxy: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsProxy: ClientProxy,
  ) {}

  async createUser(createUserdto: CreateUserDTO) {
    console.log('from user api gateway', createUserdto);
    this.communicationProxy.emit('user_created', createUserdto);
    this.analyticsProxy.emit('analytics', createUserdto);
    return this.analyticsProxy.send({ cmd: 'get_analytics' }, {});
  }
}

/**
 * * you need to  subscribe to send methods cause it returns oberservable and luckily the when you return this from controller it is automatically subscribed so inorder to make it work you need to return this from controller
 */
