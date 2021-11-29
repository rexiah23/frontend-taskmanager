import React, { useContext, useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { AllTasksContext } from '../../../providers/AllTasksContext';

const useStyle = makeStyles((theme) => ({
  taskInputCard: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(1)
  },
  confirmButton: {
    background: 'blue',
    color: '#fff'
  }
}));

const TaskInputCard = ({ setShowInput, listId }) => {
  const classes = useStyle(); 
  const [taskTitle, setTaskTitle] = useState('')
  const { addNewTask } = useContext(AllTasksContext); 


  const titleChangeHandler = event => {
    setTaskTitle(event.target.value); 
  }

  const addNewTaskHandler = () => {
    addNewTask(taskTitle, listId);
    setTaskTitle('');
    setShowInput(false);
  }

  const blurHandler = () => {
    setTaskTitle('');
    setShowInput(false);
  }

  return (
    <div>
      <div>
        <Paper className={classes.taskInputCard}>
          <InputBase 
            multiline 
            onBlur = {blurHandler}
            fullWidth 
            placeholder="Enter a title for this card..."
            value={taskTitle}
            onChange={titleChangeHandler}
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={addNewTaskHandler}>
          Add Task
        </Button>
        <IconButton onClick={() => setShowInput(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default TaskInputCard;