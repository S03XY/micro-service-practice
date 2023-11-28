import { Body, Controller, Get } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async createUser(@Body() createUserdto: CreateUserDTO) {
    return await this.userService.createUser(createUserdto);
  }
}
