import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { TypedError } from '@manga-love/core';

type ErrorResponse = {
    status: HttpStatus;
    message: string;
    type: string;
    timestamp: string;
};

@Catch()
export class AppExceptionsFilter implements ExceptionFilter, GqlExceptionFilter {
    private readonly logger = new Logger(AppExceptionsFilter.name);

    public catch(exception: Error, host: ArgumentsHost): ErrorResponse | void {
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const errorType = exception instanceof TypedError ? exception.type : 'unknown';

        this.logger.error(exception.message, exception.stack);

        throw {
            status: httpStatus,
            message: exception.message,
            timestamp: new Date().toISOString(),
            type: errorType
        };
    }
}
