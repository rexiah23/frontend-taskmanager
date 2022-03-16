import React, { useContext, useState } from 'react';
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

const DraggableListTitle = ({ value, onDelete, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(value);
  // const { updateListTitleHandler } = useContext(AllDataContext);


  const onChangeTitleHandler = event => {
    setNewTitle(event.target.value);
  }

  const onSaveTitleHandler = () => {
    onChange(newTitle); 
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
        onBlur={onSaveTitleHandler}
        autoFocus
        onChange={onChangeTitleHandler}
        />
        </div>}
    {!editing && <div className={classes.editableTitleContainer}>
      <Typography 
        onClick={() => setEditing(true)}
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