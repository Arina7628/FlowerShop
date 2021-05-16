import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  appBar: {
    position: 'right',
    top: '280px',
    width: `calc(60% - 320px)`,
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

  
  export default withStyles(styles)(ChatHeader);