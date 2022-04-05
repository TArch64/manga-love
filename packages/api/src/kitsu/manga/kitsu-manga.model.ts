export enum KitsuMangaSubtype {
    DOUJIN = 'doujin',
    MANGA = 'manga',
    MANHUA = 'manhua',
    MANHWA = 'manhwa',
    NOVEL = 'novel',
    OEL = 'oel',
    ONE_SHOT = 'oneshot'
}

export interface KitsuManga {
    id: string;
    attributes: {
        canonicalTitle: string;
        description: string;
        startDate: string | null;
        endDate: string | null;
        subtype: KitsuMangaSubtype;
        posterImage: {
            original: string;
            meta: {
                dimensions: {
                    medium: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
    };
}
