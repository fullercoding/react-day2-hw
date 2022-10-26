import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(69,74,56,0.78)',
    },
    secondary: {
      main: 'rgba(69,74,56,0.78)',
    },
    error: {
      main: '#ff2b27',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
  typography: {
    h1: {
      fontSize: '5.4rem',
    },
  },
};

const theme = createTheme(themeOptions)
export default theme