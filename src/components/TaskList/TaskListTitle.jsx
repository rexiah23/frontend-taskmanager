import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { flexbox } from '@mui/system';

const TaskListTitle = props => {
  const [editing, setEditing] = useState(false);
  const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
      marginLeft:theme.spacing(1),
      display: "flex"
    },
    editableTitle: {
      marginLeft:theme.spacing(1),
      flexGrow: 1
    }, 
  }))
  const classes = useStyle();
  return (
  <div>
    {editing && <div><InputBase value="ToDo"/></div>}
    {!editing && <div className={classes.editableTitleContainer}>
      <Typography 
        onClick={() => setEditing(prev => !prev)}
        className={classes.editableTitle}
        >
        To Do
      </Typography>
      <ExpandMoreIcon />  
      </div>}
  </div>
  );
}

export default TaskListTitle;