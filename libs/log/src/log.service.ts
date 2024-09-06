import { ConsoleLogger, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService extends ConsoleLogger {
  private readonly logger = new Logger(LogService.name);

  debug(message: any, ...optionalParams: any[]): any {
    console.debug(message, ...optionalParams);
    super.debug(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]): any {
    console.error(message, ...optionalParams);
    super.error(message, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]): any {
    console.log(message, ...optionalParams);
    super.log(message, ...optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]): any {
    console.trace(message, ...optionalParams);
    super.verbose(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]): any {
    console.warn(message, ...optionalParams);
    super.warn(message, ...optionalParams);
  }

  fatal(message: any, context?: string) {
    console.error(message);
    super.fatal(message, context);
  }
}
