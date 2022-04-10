import { reactive, Ref, UnwrapRef } from '@nuxtjs/composition-api';
import { FormValidator, Validation } from './validators';

export interface FormControlOptions<T, F> {
    value: T;
    validators?: FormValidator<T, F>[];
    affects?: Array<keyof F>;
}

export type FormOptions<T = Record<string, unknown>> = {
    [field in keyof T]: FormControlOptions<T[field], T>;
};

export interface FormControlContext<T> {
    data: Ref<T>;
    error: Ref<Validation | null>;
    touched: Ref<boolean>;
    disabled: Ref<boolean>;
    setValue(value: T): void;
    makeTouched(): void;
    validate(): boolean;
}

export interface FormAccessor<T = Record<string, unknown>> {
    data: UnwrapRef<T>;
    _options: FormOptions<T>;
    _fields: Record<string, FormControlContext<unknown>>;
    update(changed: Partial<T>): void;
    validate(): boolean;
}

export function useForm<T extends object>(options: FormOptions<T>): FormAccessor<T> {
    const initial = (Object.entries(options) as [keyof T, FormControlOptions<keyof T, T>][])
        .map(([field, config]) => ({ [field]: config.value }))
        .reduce((collector, field) => ({ ...collector, ...field }));

    const data = reactive(initial as T);

    return {
        data,
        _options: options,
        _fields: {} as Record<string, FormControlContext<unknown>>,

        validate(): boolean {
            let isValid = true;
            for (const field of Object.values(this._fields)) {
                if (!field.validate()) isValid = false;
                field.makeTouched();
            }
            return isValid;
        },

        update(changed: Partial<T>): void {
            Object.assign(data, changed);
        }
    };
}
