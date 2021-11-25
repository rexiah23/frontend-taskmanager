import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TaskListTitle = props => {
  const [editing, setEditing] = useState(false);
  const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
      display:"flex",
      justifyContent:"space-between"
    },
    editableTitle: {
      marginLeft:theme.spacing(1),
    
    }, 
    editableTitleInput : {
      margin: theme.spacing(1), 
      "&:focus":{
        background:"#ddd"
      }
    }
  }));

  const classes = useStyle();
  return (
  <div>
    {editing && <div>
      <InputBase 
        value="ToDo"
        inputProps={{
          className: classes.editableTitleInput
        }}
        fullWidth
        onBlur = {() => setEditing(prev => !prev)}
        autoFocus
        />
        </div>}
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