import React, { useState } from 'react';
import { IconButton, InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    display:"flex",
    justifyContent:"space-between"
  },
  editableTitle: {
    marginLeft:theme.spacing(1),
    marginTop:theme.spacing(1),
    fontWeight: 'bold'
  }, 
  editableTitleInput : {
    margin: theme.spacing(1), 
    "&:focus":{
      background:"#ddd"
    }
  }
}))

const DraggableListTitle = ({ value, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(value);

  const changeTitleHandler = event => {
    setNewTitle(event.target.value);
  }

  const saveTitleHandler = () => {
    onChange(newTitle); 
    setIsEditing(false);
  }

  const classes = useStyle();
  return (
  <div>
    {isEditing && <div>
      <InputBase 
        value={newTitle}
        inputProps={{
          className: classes.editableTitleInput
        }}
        fullWidth
        onBlur={saveTitleHandler}
        autoFocus
        onChange={changeTitleHandler}
        />
        </div>}
    {!isEditing && <div className={classes.editableTitleContainer}>
      <Typography 
        onClick={() => setIsEditing(true)}
        className={classes.editableTitle}
        >
        {value}
      </Typography>
      <IconButton onClick={() => onDelete(newTitle)}>
        <MoreHorizIcon />  
      </IconButton>
      </div>}
  </div>
  );
}

export default DraggableListTitle;