import React, { useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

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

const InputCard = ({ value, onChange, type='list' }) => {
  const classes = useStyle(); 
  const [itemContent, setItemContent] = useState('')

  const titleChangeHandler = event => {
    setItemContent(event.target.value); 
  }

  const addNewItemHandler = () => {
    let body = {};
    if (type === 'task') {
      const listIdParsed = value.slice(0, -1);
      body = {content: itemContent, listIdParsed, type:'task'};
    } else {
      body = {content: itemContent, type:'list'};
    };
    onChange(body); 
    setItemContent('');
  }

  return (
    <div>
      <div>
        <Paper className={classes.InputCard}>
          <InputBase 
            multiline 
            onBlur = {() => onChange()}
            fullWidth 
            placeholder={type === 'task' ? "Enter a new task...": "Enter a new list..." }
            value={itemContent}
            onChange={titleChangeHandler}
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={addNewItemHandler}>
          {type === 'task' ? "Add task" : "Add list"}
        </Button>
        <IconButton onClick={() => onChange()}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default InputCard;