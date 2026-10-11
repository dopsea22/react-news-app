import React from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollToTopProps {
    show: boolean;
    onClick: () => void;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ show, onClick }) => {
    return (
        <Zoom in={show}>
            <Fab
                color="primary"
                size="medium"
                onClick={onClick}
                aria-label="scroll to top"
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 1000,
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};