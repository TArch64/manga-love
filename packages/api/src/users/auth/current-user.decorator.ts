import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DatabaseUser } from '../../prisma';

export type CurrentUser = Omit<DatabaseUser, 'password'>;

export const QLCurrentUser = createParamDecorator<unknown, unknown, CurrentUser>(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    }
);

