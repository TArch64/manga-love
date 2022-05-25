export type Validation = { message: string, params?: Record<string, string> };
export type FormValidator<T, F> = (value: T, form: F) => Validation | null;

export function validateRequired<F>(params: Record<string, string> = {}): FormValidator<unknown, F> {
    return (value: unknown): Validation | null => {
        return value ? null : { message: 'validations.required', params };
    };
}

export function validatePattern<F>(regex: RegExp, error: Validation): FormValidator<string, F> {
    return (value: string): Validation | null => {
        return regex.test(value) ? null : error;
    };
}

export function validateEmail<F>(): FormValidator<string, F> {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    return validatePattern<F>(regex,  { message: 'validations.email' });
}

export function validatePassword<F>(): FormValidator<string, F> {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    return validatePattern<F>(regex,  { message: 'validations.password' });
}

export function validatePasswordConfirmation<F extends { password: string, passwordConfirmation: string }>(): FormValidator<string, F> {
    return (value: string, form: F): Validation | null => {
        if (form.password === form.passwordConfirmation) return null;

        return { message: 'validations.passwordConfirmation' };
    };
}
