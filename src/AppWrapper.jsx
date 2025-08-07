// src/AppWrapper.jsx
import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles, createTheme, Button } from '@mui/material';

export default function AppWrapper({ children }) {
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
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </div>
      {children}
    </ThemeProvider>
  );
}

