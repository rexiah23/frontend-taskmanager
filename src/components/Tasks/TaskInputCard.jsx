import React, { useContext, useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { AllDataContext } from '../../providers/AllDataContext';

const useStyle = makeStyles((theme) => ({
  taskInputCard: {
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

const TaskInputCard = ({ setShowInput, listId, type }) => {
  const classes = useStyle(); 
  const [title, setTitle] = useState('')
  const { addNewTask, addNewList } = useContext(AllDataContext); 


  const titleChangeHandler = event => {
    setTitle(event.target.value); 
  }

  const addNewTaskHandler = () => {
    if (type === 'task') {
      addNewTask(title, listId);
    } else {
      addNewList(title); 
    }
    setTitle('');
    setShowInput(false);
  }

  return (
    <div>
      <div>
        <Paper className={classes.taskInputCard}>
          <InputBase 
            multiline 
            onBlur = {() => setShowInput(false)}
            fullWidth 
            placeholder={type === 'list' ? "Enter a new list..." : "Enter a new task..."}
            value={title}
            onChange={titleChangeHandler}
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={addNewTaskHandler}>
          {type === 'list' ? "Add list" : "Add task"}
        </Button>
        <IconButton onClick={() => setShowInput(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default TaskInputCard;