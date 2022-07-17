export function useExternalScript(src: string): Promise<void> {
    const isLoaded = document.querySelector(`script[src="${src}"]`);

    if (isLoaded) return Promise.resolve();

    return new Promise<void>((resolve) => {
        const scriptEl = document.createElement('script');

        scriptEl.src = src;
        scriptEl.onload = (): void => resolve();

        document.body.append(scriptEl);
    });
}
