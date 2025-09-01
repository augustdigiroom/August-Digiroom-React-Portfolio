// src/AppWrapper.jsx
import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles, createTheme } from '@mui/material';
import App from './App'; // Import your App component

export default function AppWrapper() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Create theme using Inter
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: '"Inter", sans-serif',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            fontFamily: '"Inter", sans-serif',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
          },
          a: {
            textDecoration: 'none',
            color: 'inherit',
          },
        }}
      />
      
      <App toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
    </ThemeProvider>
  );
}