import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(): string {

    return '<h1>Rinat</h1>';
  }
  @Post()
  createUser(): void {
    // tslint:disable-next-line: no-console
    console.log('Created user');
  }
}
