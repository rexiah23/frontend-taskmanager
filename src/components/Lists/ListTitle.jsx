import React, { useContext, useState } from 'react';
import { IconButton, InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AllDataContext } from '../../providers/AllDataContext';

const ListTitle = ({ title, list, deleteHandler }) => {
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
    updateListTitle(newTitle, list.id)
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
      <IconButton onClick={() => deleteHandler(list, 'list')}>
        <MoreHorizIcon />  
      </IconButton>
      </div>}
  </div>
  );
}

export default ListTitle;