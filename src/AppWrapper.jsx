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

      <div
        style={{
          position: 'fixed',
          top: 22,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
        }}
      >
          <Button
              variant="outlined"
              size="small"
              onClick={() => setDarkMode(!darkMode)}
              style={{
                borderRadius: '9999px', // fully rounded (pill)
                padding: '6px 16px',
                fontWeight: 600,
                border: darkMode ? '2px solid #ffffff' : '2px solid #000000',
                backgroundColor: darkMode ? '#000000' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000',
                boxShadow: 'none', // flat look
                textTransform: 'none', // keep text case as-is
              }}
            >
              {darkMode ? '🌙 Dark' : '☀️ Light'}
            </Button>

      </div>

      {children}
    </ThemeProvider>
  );
}

