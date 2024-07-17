import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers()
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(id)
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.usersService.createUser(newUser)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id, user)
  }

}
