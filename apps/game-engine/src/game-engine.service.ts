import { Injectable } from '@nestjs/common';

@Injectable()
export class GameEngineService {
  getHello(): string {
    return 'Hello World!';
  }
}
