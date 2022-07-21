export enum Language {
    UA = 'UA',
    EN = 'EN'
}

function getLanguageCode(): Language {
    if (process.server) return Language.UA;

    return navigator.language === 'uk' ? Language.UA : Language.EN;
}

export const LANGUAGE_CODE = getLanguageCode();
