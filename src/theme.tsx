// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff7f7f',
      main: '#cc2525',
      dark: '#a31d1d',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#707070',
      main: '#545454',
      dark: '#383838',
      contrastText: '#ffffff',
    },
    error: {
      light: '#ffb4b4',
      main: '#ef5350',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#ffb74d',
      main: '#f9a825',
      dark: '#f57f17',
      contrastText: '#000000',
    },
    info: {
      light: '#29b6f6',
      main: '#0288d1',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    success: {
      light: '#66bb6a',
      main: '#2e7d32',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
    },
  },
});

export default theme;