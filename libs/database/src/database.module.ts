import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { databaseProviders } from './database.providers';

@Global()
@Module({
  providers: [...databaseProviders, DatabaseService],
  exports: [...databaseProviders, DatabaseService],
})
export class DatabaseModule {}
