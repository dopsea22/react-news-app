export interface NewsSource {
    name: string;
    url?: string;
}

export interface News {
    title: string;
    description?: string;
    content: string;
    url: string;
    image?: string;
    publishedAt: string;
    source: NewsSource;
}

export type Language = 'de' | 'en';