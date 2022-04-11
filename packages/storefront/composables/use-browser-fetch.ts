export interface BrowserHttpError {
    type: string;
}

export function isBrowserHttpError(error: unknown, type: string): boolean {
    return (error as BrowserHttpError).type === type;
}

export async function useBrowserFetch<B extends {}, R = unknown>(url: string, body: B): Promise<R> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw await response.json();
    }

    return response.json();
}
