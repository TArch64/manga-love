export type Validation = { message: string, params?: Record<string, string> };
export type FormValidator<T, F> = (value: T, form: F) => Validation | null;

export function validateRequired<F>(message: string, params: Record<string, string> = {}): FormValidator<unknown, F> {
    return (value: unknown): Validation | null => {
        return value ? null : { message, params };
    };
}

export function validateEmail<F>(): FormValidator<string, F> {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (value: string): Validation | null => {
        return regex.test(String(value).toLowerCase()) ? null : { message: 'validations.email' };
    };
}
