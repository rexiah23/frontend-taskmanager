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

const TaskOrListContentInput = ({ value, onChange }) => {
  const classes = useStyle(); 
  const [content, setContent] = useState('')

  const contentChangeHandler = event => {
    setContent(event.target.value); 
  }

  const submitNewTaskOrListHandler = () => {
    onChange(content); 
    setContent('');
  }

  return (
    <div>
      <div>
        <Paper className={classes.InputCard}>
          <InputBase 
            multiline 
            onBlur = {() => onChange()}
            fullWidth 
            // placeholder={type === 'task' ? "Enter a new task...": "Enter a new list..." }
            placeholder={`Enter a new ${value}...`}
            value={content}
            onChange={contentChangeHandler}
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={submitNewTaskOrListHandler}>
          {`Add a ${value}`}
        </Button>
        <IconButton onClick={() => onChange()}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default TaskOrListContentInput;