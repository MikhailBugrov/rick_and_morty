import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5f72d4',
    },
    secondary: {
      main: '#100108',
    },
    background: {
      default: '#f1f1f1',
      paper: '#c8ced8',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          '& > *': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            marginBottom: '10px',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: '100px',
          marginLeft: '4px',
        },
      },
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '5px',
          maxWidth: '450px',
          width: '100%',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          spacing: 3,
        },
        item: {
          width: '400px',
        },
      },
      defaultProps: {
        spacing: 3,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          padding: '2px',
          marginTop: '5px',
          marginBottom: '5px',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          marginBottom: '25px',
          padding: '25px',
        },
      },
      defaultProps: {
        size: 'large',
        variant: 'outlined',
        color: 'primary',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginBottom: '5px',
          textAlign: 'center',
        },
      },
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  },
});

export default theme;
