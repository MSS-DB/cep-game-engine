import { Injectable } from '@nestjs/common';

@Injectable()
export class CampaignSetupService {
  getHello(): string {
    return 'Hello World!';
  }
}
