import { create } from 'zustand';
import type {Language} from '../types/news';

interface Translations {
    news: string;
    categories: string;
    switchLang: string;
    searchPlaceholder: string;
    articleCount: string;
    category: string;
    selectCategory: string;
    allSources: string;
    readMore: string;
}

interface LanguageState {
    language: Language;
    toggleLanguage: () => void;
    t: Translations;
}

const translations: Record<Language, Translations> = {
    de: {
        news: 'NACHRICHTEN',
        categories: 'KATEGORIEN',
        switchLang: 'Zu Englisch wechseln',
        searchPlaceholder: 'Suche...',
        articleCount: 'Anzahl Artikel',
        category: 'Kategorie',
        selectCategory: 'Kategorie wählen',
        allSources: 'alle',
        readMore: 'Weiterlesen...',
    },
    en: {
        news: 'NEWS',
        categories: 'CATEGORIES',
        switchLang: 'Auf Deutsch wechseln',
        searchPlaceholder: 'search...',
        articleCount: 'Article Count',
        category: 'Category',
        selectCategory: 'Select Category',
        allSources: 'all',
        readMore: 'Read more...',
    },
};

export const useLanguageStore = create<LanguageState>((set) => ({
    language: 'de',
    toggleLanguage: () =>
        set((state) => {
            const nextLang: Language = state.language === 'de' ? 'en' : 'de';
            return {
                language: nextLang,
                t: translations[nextLang],
            };
        }),
    t: translations.de,
}));