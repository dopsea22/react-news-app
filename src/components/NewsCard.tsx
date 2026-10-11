import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, Box } from '@mui/material';
import type {News} from '../types/news';

interface NewsCardProps {
    article: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    return (
        <Card sx={{ mb: 3, boxShadow: 1, borderRadius: 1 }}>
            <CardContent>
                <Typography variant="h6" component="h2" sx={{ color: '#6a1b9a', mb: 1, fontWeight: 500 }}>
                    {article.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {article.description} - {article.publishedAt}
                </Typography>

                <Typography variant="body1" sx={{ color: '#333', mb: 2, lineHeight: 1.6 }}>
                    {article.content}
                </Typography>

                <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Quelle / Kategorie: {article.source?.name}
                    </Typography>
                    <Typography variant="caption">
                        Url:{' '}
                        <Link href={article.url} target="_blank" rel="noopener noreferrer" underline="hover">
                            {article.url}
                        </Link>
                    </Typography>
                </Box>

                {article.image && (
                    <CardMedia
                        component="img"
                        height="240"
                        image={article.image}
                        alt={article.title}
                        sx={{ mt: 2, borderRadius: 1, objectFit: 'cover' }}
                    />
                )}
            </CardContent>
        </Card>
    );
};