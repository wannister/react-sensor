import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard"><ListItemText primary="Dashboard" /></Link>
      
    </ListItem>
    <ListItem>
    <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/about"><ListItemText primary="About" /></Link>
    </ListItem>
  </div>
);
