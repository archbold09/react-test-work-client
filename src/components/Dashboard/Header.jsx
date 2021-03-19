import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = () => {

  const classes = useStyles();

  return(
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
        <Link component={RouterLink} color="inherit" to="/">
          Archbold Angel
        </Link>
      </Typography>
      <nav>
        <Link variant="button" color="textPrimary" component={RouterLink} to="exercise1" className={classes.link}>
          Exercise 1
        </Link>
        <Link variant="button" color="textPrimary" component={RouterLink} to="exercise2" className={classes.link}>
          Exercise 2
        </Link>
        <Link variant="button" color="textPrimary" component={RouterLink} to="exercise3" className={classes.link}>
          Exercise 3
        </Link>
      </nav>
    </Toolbar>
  </AppBar>
  )
}


export default Header;