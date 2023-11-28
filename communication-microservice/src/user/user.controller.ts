import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDTO } from './create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @EventPattern('user_created')
  async createUser(createUserdto: CreateUserDTO) {
    await this.userService.createUser(createUserdto);
  }
}
