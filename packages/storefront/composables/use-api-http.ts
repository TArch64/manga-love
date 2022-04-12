export interface ApiError {
    type: string;
}

export function isApiError(error: unknown, type: string): boolean {
    return (error as ApiError).type === type;
}

export interface ApiHttpClient {
    post<B extends {}, R = unknown>(url: string, body: B): Promise<R>;
}

enum HttpMethod {
    POST = 'POST'
}

export function useApiHttp(): ApiHttpClient {
    async function request<B extends {}, R = unknown>(method: HttpMethod, url: string, body: B): Promise<R> {
        const response = await fetch(`/api/${url}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw await response.json();
        }

        return response.json();
    }

    return {
        post<B extends {}, R = unknown>(url: string, body: B): Promise<R> {
            return request<B, R>(HttpMethod.POST, url, body);
        }
    };
}
