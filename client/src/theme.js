import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default createMuiTheme({
  palette: {
    primary: {
      main: '#538e5a'
    },
    secondary: {
      main: '#f05c22'
    }
  },
  typography: {
    useNextVariants: true
  },
  customs: {
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing(4),
      marginTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }
  }
});