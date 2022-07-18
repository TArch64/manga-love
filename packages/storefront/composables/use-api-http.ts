export function isApiError(error: unknown, type: string): boolean {
    return (error as Error).message === type;
}
