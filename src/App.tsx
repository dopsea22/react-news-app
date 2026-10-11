import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { Header } from './components/Header';
import { NewsPage } from './pages/NewsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollToTop } from './hooks/useScrollToTop';

export const App: React.FC = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const { showButton, scrollToTop } = useScrollToTop(topRef);

  return (
      <BrowserRouter>
        {/* Anchor Element für Scroll-To-Top */}
        <div ref={topRef} />

        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pb: 6 }}>
          <Header />
          <Container maxWidth="md" sx={{ mt: 3 }}>
            <Routes>
              <Route path="/" element={<NewsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
            </Routes>
          </Container>
          <ScrollToTop show={showButton} onClick={scrollToTop} />
        </Box>
      </BrowserRouter>
  );
};

export default App;