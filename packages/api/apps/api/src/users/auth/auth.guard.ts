import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { CurrentUser } from './current-user.decorator';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    public getRequest(context: ExecutionContext): Request {
        return GqlExecutionContext.create(context).getContext().req;
    }

    public handleRequest<TUser = CurrentUser>(error: Error, user: unknown): TUser {
        if (error || !user) {
            throw error || new UnauthorizedException();
        }
        return user as TUser;
    }
}
