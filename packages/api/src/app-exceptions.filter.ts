import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { GqlExceptionFilter } from '@nestjs/graphql';

type ErrorResponse = {
    status: HttpStatus;
    message: string;
    timestamp: string;
};

@Catch()
export class AppExceptionsFilter implements ExceptionFilter, GqlExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    public catch(exception: Error, host: ArgumentsHost): ErrorResponse | void {
        console.log('EXCEPTION', exception);

        const type = host.getType<'graphql' | 'http'>();
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const responseBody: ErrorResponse = {
            status: httpStatus,
            message: exception.message,
            timestamp: new Date().toISOString()
        };

        if (type === 'graphql') {
            throw responseBody;
        }

        this.httpAdapterHost.httpAdapter.reply(
            host.switchToHttp().getResponse(),
            responseBody,
            httpStatus
        );
    }
}
