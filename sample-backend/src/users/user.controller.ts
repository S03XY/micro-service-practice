import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserdto: CreateUserDTO) {
    await this.userService.createUser(createUserdto);
  }
}
