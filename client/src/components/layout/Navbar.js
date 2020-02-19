import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    height: '48px' // Push everything else down (because of fixed appbar)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
});

function Navbar({ classes }) {
  return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  DBlandIT Cursos
              </Typography>
              <Button color="inherit" component={Link} to="/login">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  )
}

export default withStyles(styles)(Navbar)