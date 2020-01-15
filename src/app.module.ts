import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
import { SharedModule } from './shared/shared.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, IdeaModule, SharedModule, CommentModule],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  }, {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  }],
})
export class AppModule { }
