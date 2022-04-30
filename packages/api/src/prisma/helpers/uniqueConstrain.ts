import { Prisma } from '../client';
import { UniqueConstrainError } from '../prisma.service';
import { TypedError } from '../../core';

export function isUniqueConstrain(error: unknown): error is UniqueConstrainError {
    if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return false;
    return error.code === 'P2002';
}

export function handleUniqueConstrain(error: unknown): never {
    if (!isUniqueConstrain(error)) {
        throw error;
    }
    const [column] = error.meta.target;
    throw new TypedError(`${column}-already-taken`);
}
