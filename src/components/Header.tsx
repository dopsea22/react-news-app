import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';

export const Header: React.FC = () => {
    const { toggleLanguage, t } = useLanguageStore();

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    news app
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                        component={NavLink}
                        to="/"
                        end
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            borderBottom: () =>
                                window.location.pathname === '/' ? '2px solid white' : 'none',
                            borderRadius: 0,
                        }}
                    >
                        {t.news}
                    </Button>

                    <Button
                        component={NavLink}
                        to="/categories"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            borderBottom: () =>
                                window.location.pathname === '/categories' ? '2px solid white' : 'none',
                            borderRadius: 0,
                        }}
                    >
                        {t.categories}
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={toggleLanguage}
                        sx={{ color: 'white', borderColor: 'white', textTransform: 'none', ml: 2 }}
                    >
                        {t.switchLang}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};