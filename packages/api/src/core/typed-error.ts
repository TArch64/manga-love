import { HttpException } from '@nestjs/common';

export class TypedError extends HttpException {
    constructor(public readonly type: string, status = 422) {
        super(null, status);
    }
}
