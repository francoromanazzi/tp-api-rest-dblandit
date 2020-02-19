import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default createMuiTheme({
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