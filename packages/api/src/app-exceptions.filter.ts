import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { GqlExceptionFilter } from '@nestjs/graphql';
import {TypedError} from "./core";

type ErrorResponse = {
    status: HttpStatus;
    message: string;
    type: string
    timestamp: string;
};

@Catch()
export class AppExceptionsFilter implements ExceptionFilter, GqlExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    public catch(exception: Error, host: ArgumentsHost): ErrorResponse | void {
        const contextType = host.getType<'graphql' | 'http'>();
        const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const errorType = exception instanceof TypedError ? exception.type : 'unknown';

        const responseBody: ErrorResponse = {
            status: httpStatus,
            message: exception.message,
            timestamp: new Date().toISOString(),
            type: errorType
        };

        if (contextType === 'graphql') {
            throw responseBody;
        }

        this.httpAdapterHost.httpAdapter.reply(
            host.switchToHttp().getResponse(),
            responseBody,
            httpStatus
        );
    }
}
