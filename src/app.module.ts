import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, IdeaModule],
})
export class AppModule { }
