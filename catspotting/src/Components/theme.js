import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: '#D1A7A0',
    secondary: '#F7EDE1',
  },
  status: {
    danger: 'orange',
  },
});

export default theme