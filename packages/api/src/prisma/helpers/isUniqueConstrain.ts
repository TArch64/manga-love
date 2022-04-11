import {Prisma} from "../client";
import {UniqueConstrainError} from "../prisma.service";

export function isUniqueConstrain(error: unknown): error is UniqueConstrainError {
    if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return false;
    return error.code === 'P2002';
}
