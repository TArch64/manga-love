export interface ApiError {
    type: string;
}

export function isApiError(error: unknown, type: string): boolean {
    return (error as ApiError).type === type;
}
