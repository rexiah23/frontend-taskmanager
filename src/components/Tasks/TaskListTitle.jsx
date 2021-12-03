import React, { useContext, useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AllDataContext } from '../../providers/AllDataContext';

const TaskListTitle = ({ title, listId }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(AllDataContext);

  const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
      display:"flex",
      justifyContent:"space-between"
    },
    editableTitle: {
      marginLeft:theme.spacing(1),
      fontWeight: 'bold'
    }, 
    editableTitleInput : {
      margin: theme.spacing(1), 
      "&:focus":{
        background:"#ddd"
      }
    }
  }));

  const newTitleHandler = event => {
    setNewTitle(event.target.value);
  }

  const blurHandler = () => {
    updateListTitle(newTitle, listId)
    setEditing(false);
    
  }

  const classes = useStyle();
  return (
  <div>
    {editing && <div>
      <InputBase 
        value={newTitle}
        inputProps={{
          className: classes.editableTitleInput
        }}
        fullWidth
        onBlur = {blurHandler}
        autoFocus
        onChange={newTitleHandler}
        />
        </div>}
    {!editing && <div className={classes.editableTitleContainer}>
      <Typography 
        onClick={() => setEditing(true)}
        className={classes.editableTitle}
        >
        {title}
      </Typography>
      <ExpandMoreIcon />  
      </div>}
  </div>
  );
}

export default TaskListTitle;