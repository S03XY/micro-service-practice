import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserdto: CreateUserDTO) {
    console.log('from microservice user', createUserdto);
  }
}
