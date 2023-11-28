import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('COMMUNICATIONS') private readonly communicationProxy: ClientProxy,
  ) {}

  async createUser(createUserdto: CreateUserDTO) {
    console.log('from user api gateway', createUserdto);
    this.communicationProxy.emit('user_created', createUserdto);
  }
}
