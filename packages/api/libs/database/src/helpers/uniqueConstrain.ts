import { TypedError } from '@manga-love/core';
import { Prisma } from '@prisma/client';
import { UniqueConstrainError } from '../prisma';

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
