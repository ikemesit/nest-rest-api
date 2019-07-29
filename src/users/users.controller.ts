import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { Observable, of } from 'rxjs';

import { User } from './models/user.model';
import { CreateUserDto } from './dto/createuser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('all')
  findAll(): Observable<User[]> {
    return of(this.usersService.findAll());
  }

  @Get(':id')
  findUser(@Param('id') id: string): Observable<User> {
    return of(this.usersService.findUser(id));
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Observable<User> {
    return of(this.usersService.createUser(user));
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): Observable<User> {
    return of(user);
  }
}
