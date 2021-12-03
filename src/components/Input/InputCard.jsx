import React, { useContext, useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { AllDataContext } from '../../providers/AllDataContext';

const useStyle = makeStyles((theme) => ({
  InputCard: {
    width: '280px',
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(1)
  },
  confirmButton: {
    background: 'green',
    color: '#fff',
    marginLeft:theme.spacing(1)
  }
}));

const InputCard = ({ setShowInput, listId, type }) => {
  const classes = useStyle(); 
  const [title, setTitle] = useState('')
  const { newAddHandler } = useContext(AllDataContext); 


  const titleChangeHandler = event => {
    setTitle(event.target.value); 
  }

  const addNewItemHandler = () => {
    let body = {};
    if (type === 'task') {
      body = {title, listId, type:'task'};
    } else {
      body = {title, type:'list'};
    };

    console.log("BODY IS: ", body);
    newAddHandler(body); 
    setTitle('');
    setShowInput(false);
  }

  return (
    <div>
      <div>
        <Paper className={classes.InputCard}>
          <InputBase 
            multiline 
            onBlur = {() => setShowInput(false)}
            fullWidth 
            placeholder={type === 'task' ? "Enter a new task...": "Enter a new list..." }
            value={title}
            onChange={titleChangeHandler}
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={addNewItemHandler}>
          {type === 'task' ? "Add task" : "Add list"}
        </Button>
        <IconButton onClick={() => setShowInput(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default InputCard;