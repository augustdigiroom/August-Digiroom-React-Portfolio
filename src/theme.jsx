// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
  palette: {
    mode: 'light', // or 'dark'
  },
});

export default theme;
