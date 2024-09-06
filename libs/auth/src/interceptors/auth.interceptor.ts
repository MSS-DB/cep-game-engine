import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuthInterceptor.name);

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    this.logger.log('token', token);
    this.logger.log('auth', authHeader);

    // TODO: Enable this when AuthModule is ready
    // if (!token) {
    //   throw new UnauthorizedException('No token provided');
    // }
    return handler.handle();
  }
}
