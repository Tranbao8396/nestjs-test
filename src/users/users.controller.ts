import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get(':Userid')
  async getUser(@Param('Userid') UserId) {
    const user = await this.usersService.getUser(UserId);
    return user;
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.addUser(createUserDto);
    return user;
  }

  @Post('/check')
  async checkUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.checkUser(createUserDto);
    return user;
  }

  @Post(':Userid')
  async updateUser(
    @Param('Userid') UserId,
    @Body() createUserDto: CreateUserDto,
  ) {
    const user = await this.usersService.updateUser(UserId, createUserDto);
    return user;
  }

  @Delete(':userId')
  async deleteCourse(@Param('userId') userId) {
    const users = await this.usersService.deleteUser(userId);
    return users;
  }
}
