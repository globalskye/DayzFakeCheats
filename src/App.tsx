import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Box from '@mui/material/Box';
import './styles/styles.css'; // импортируем CSS файл

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className="root-container">
                <Header />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <MainContent />
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;