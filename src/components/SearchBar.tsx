import React from 'react';
import {TextField, Box, Typography} from '@mui/material';
import { useLanguageStore } from '../stores/useLanguageStore';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    const t = useLanguageStore((state) => state.t);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {t.searchPlaceholder}:
            </Typography>
            <TextField
                size="small"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                sx={{ backgroundColor: '#fff', width: '220px' }}
            />
        </Box>
    );
};
