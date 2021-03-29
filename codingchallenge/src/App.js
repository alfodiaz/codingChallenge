import React,{ useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'fontsource-roboto';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {Home} from "./components/home/Home";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
      <div>
      <AppBar position="static">
        <Toolbar>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to="/users">Users</Link></MenuItem>
</Menu>
          <Typography variant="h6" className={classes.title}>
            Coding Challenge
          </Typography>
        </Toolbar>
      </AppBar>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
