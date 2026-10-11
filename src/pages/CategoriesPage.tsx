import React, { useState } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress,
} from '@mui/material';
import { useNewsData } from '../hooks/useNewsData';
import { NewsCard } from '../components/NewsCard';
import { useLanguageStore } from '../stores/useLanguageStore';

const CATEGORIES = [
    { id: 'general', label: 'General / Nation' },
    { id: 'business', label: 'Business' },
    { id: 'sports', label: 'Sports' },
    { id: 'technology', label: 'Technology' },
    { id: 'science', label: 'Science' },
    { id: 'health', label: 'Health' },
];

const COUNTS = [1, 2, 5, 10];

export const CategoriesPage: React.FC = () => {
    const [category, setCategory] = useState<string>('sports');
    const [maxCount, setMaxCount] = useState<number>(10);
    const t = useLanguageStore((state) => state.t);

    const { articles, loading } = useNewsData(category, maxCount);

    return (
        <Box>
            {/* Dropdown-Auswahl für Kategorie und Anzahl */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel id="category-select-label">{t.category}</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        label={t.category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {CATEGORIES.map((cat) => (
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel id="count-select-label">{t.articleCount}</InputLabel>
                    <Select
                        labelId="count-select-label"
                        value={maxCount}
                        label={t.articleCount}
                        onChange={(e) => setMaxCount(Number(e.target.value))}
                    >
                        {COUNTS.map((cnt) => (
                            <MenuItem key={cnt} value={cnt}>
                                {cnt}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Artikel-Liste */}
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))
            )}
        </Box>
    );
};