const defaultLanguage = 'en';

export class Translation {
    _language = defaultLanguage;

    _strings = {};

    constructor(language) {
        this._language = language;
    }

    selectLanguage(language) {
        this._language = language;

        localStorage.setItem('language', this._language);
    }

    addStrings(language, strings) {
        this._strings[language] = { ...(this._strings[language] || {}), ...strings };
    }

    getString(string, language = this._language) {
        return this._strings[language][string] || this._strings[defaultLanguage][string] || string;
    }
}

function getLanguage() {
    let language = localStorage.getItem('language');

    if (language)
        return language;

    language = navigator.language.split('-')[0];

    if (language)
        return language;

    return defaultLanguage;
}

export const GlobalTranslation = new Translation(getLanguage());

/**
 * @param {string} string
 * @param {string|null} language
 */
export function Translate(string, language = GlobalTranslation._language) {
    return GlobalTranslation.getString(string, language);
}

export default GlobalTranslation;
