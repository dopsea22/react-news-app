import { useState, useEffect } from 'react';
import axios from 'axios';
import type {News} from '../types/news';
import { useLanguageStore } from '../stores/useLanguageStore';

const API_KEY = 'b8eff3d7b76475631cb328ab0e9c9a9d';

export const useNewsData = (category = 'general', max = 10) => {
    const [articles, setArticles] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const language = useLanguageStore((state) => state.language);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
                    params: {
                        category,
                        max,
                        lang: language,
                        apikey: API_KEY,
                    },
                });
                setArticles(response.data.articles || []);
            } catch (err: any) {
                setError(err.message || 'Fehler beim Laden');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, max, language]);

    return { articles, loading, error };
};