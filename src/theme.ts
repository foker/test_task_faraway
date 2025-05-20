import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFE81F',
      light: '#FFF5A3',
      dark: '#B3A300',
    },
    secondary: {
      main: '#4BD5EE',
      light: '#7FE0F2',
      dark: '#3595A6',
    },
    background: {
      default: '#000000',
      paper: 'rgba(26, 26, 26, 0.9)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
    error: {
      main: '#FF3D00',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          backgroundImage: 'url("/images/star-wars-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '#root': {
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.MuiButton-contained': {
            backgroundColor: '#FFE81F',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#FFF5A3',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          border: '1px solid rgba(255, 232, 31, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: '#B3B3B3',
          },
          '& .MuiOutlinedInput-root': {
            color: '#FFFFFF',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 232, 31, 0.2)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 232, 31, 0.4)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FFE81F',
            },
          },
          '& .MuiFormHelperText-root': {
            color: '#B3B3B3',
            '&.Mui-error': {
              color: '#f44336',
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          border: '1px solid rgba(255, 232, 31, 0.2)',
          '&.MuiAlert-standardSuccess': {
            color: '#4caf50',
            '& .MuiAlert-icon': {
              color: '#4caf50',
            },
          },
          '&.MuiAlert-standardError': {
            color: '#f44336',
            '& .MuiAlert-icon': {
              color: '#f44336',
            },
          },
          '&.MuiAlert-standardWarning': {
            color: '#ff9800',
            '& .MuiAlert-icon': {
              color: '#ff9800',
            },
          },
          '&.MuiAlert-standardInfo': {
            color: '#2196f3',
            '& .MuiAlert-icon': {
              color: '#2196f3',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          border: '1px solid rgba(255, 232, 31, 0.2)',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255, 232, 31, 0.1), transparent)',
          },
        },
      },
    },
  },
}); 