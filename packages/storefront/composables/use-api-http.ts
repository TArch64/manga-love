export interface ApiError {
    type: string;
}

export function isApiError(error: unknown, type: string): boolean {
    return (error as ApiError).type === type;
}

enum HttpMethod {
    GET = 'GET',
    POST = 'POST'
}

export interface ApiHttpClient {
    get<R>(url: string, query?: Record<string, string>): Promise<R>;
    post<B extends {}, R = unknown>(url: string, body: B): Promise<R>;
}

export function useApiHttp(): ApiHttpClient {
    const apiUrl = process.client ? process.env.STOREFRONT_BROWSER_API_URL : process.env.STOREFRONT_SERVER_API_URL;

    async function request<R = unknown>(method: HttpMethod, url: string, init: RequestInit): Promise<R> {
        const response = await fetch(`${apiUrl}/${url}`, {
            headers: { 'Content-Type': 'application/json' },
            method,
            ...init
        });

        if (!response.ok) {
            throw await response.json();
        }

        return response.json();
    }

    return {
        post<B extends {}, R = unknown>(url: string, body: B): Promise<R> {
            return request<R>(HttpMethod.POST, url, {
                body: JSON.stringify(body)
            });
        },

        get<R>(url: string, query?: Record<string, string>): Promise<R> {
            const params = query ? `?${new URLSearchParams(query)}` : '';
            return request<R>(HttpMethod.GET, `${url}${params}`, {});
        }
    };
}
