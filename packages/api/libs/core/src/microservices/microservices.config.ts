export interface MicroserviceConfig {
    host: string;
}

export const MICROSERVICES = {
    AUTH: { host: process.env.API_AUTH_HOST },
    MANGA_LIBRARY: { host: process.env.API_MANGA_LIBRARY_HOST },
    MAILER: { host: process.env.API_MAILER_HOST },
    UPLOADER: { host: process.env.API_UPLOADER_HOST }
};
