export async function useBrowserFetch<B extends {}, R = unknown>(url: string, body: B): Promise<R> {
    const response = await window.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return response.json();
}
