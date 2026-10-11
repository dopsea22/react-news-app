import React, { useState, useMemo } from 'react';
import { Box, Chip, Typography, CircularProgress } from '@mui/material';
import { useNewsData } from '../hooks/useNewsData';
import { NewsCard } from '../components/NewsCard';
import { SearchBar } from '../components/SearchBar';
import { useLanguageStore } from '../stores/useLanguageStore';

export const NewsPage: React.FC = () => {
    const { articles, loading } = useNewsData('general', 10);
    const [selectedSource, setSelectedSource] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const t = useLanguageStore((state) => state.t);

    // Alle verfügbaren Quellen aus den geladenen Artikeln ermitteln
    const sources = useMemo(() => {
        const list = Array.from(
            new Set(articles.map((a) => a.source?.name).filter(Boolean))
        );
        return ['all', ...list];
    }, [articles]);

    // Filterung nach Quelle und Suchbegriff
    const filteredArticles = useMemo(() => {
        return articles.filter((article) => {
            const matchesSource =
                selectedSource === 'all' || article.source?.name === selectedSource;
            const matchesSearch =
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.content.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesSource && matchesSearch;
        });
    }, [articles, selectedSource, searchTerm]);

    return (
        <Box>
            {/* Quellen-Filter (Chips) */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {sources.map((src) => (
                    <Chip
                        key={src}
                        label={src === 'all' ? t.allSources : src}
                        onClick={() => setSelectedSource(src)}
                        color={selectedSource === src ? 'primary' : 'default'}
                        variant={selectedSource === src ? 'filled' : 'outlined'}
                        sx={{ borderRadius: '16px', cursor: 'pointer' }}
                    />
                ))}
            </Box>

            {/* Suchzeile */}
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {/* Artikel-Anzahl Anzeige */}
            <Typography variant="h6" sx={{ textAlign: 'center', my: 2, fontWeight: 'bold' }}>
                {t.articleCount}:{filteredArticles.length}
            </Typography>

            {/* Artikel-Liste */}
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                filteredArticles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))
            )}
        </Box>
    );
};