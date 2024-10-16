import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    // create the route
    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET users/:id
    findOne(@Param('id') id: string){
        return this.usersService.findOne(+id); // all params are string so we have converted as number using unary operator
    }

    @Post() // POST /users/
    create(@Body() user: {name: string, email: string, role: 'INTERN' | 
    'ADMIN' | 'ENGINEER'}){
        return this.usersService.create(user);
    }

    @Patch(':id')
    update(@Param('id')id: string, @Body()  userUpdate : {name?: string, email?: string, 
        role?: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.usersService.delete(+id); 
    }
}
