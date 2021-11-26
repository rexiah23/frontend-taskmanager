import React from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

const useStyle = makeStyles((theme) => ({
  taskInputCard: {
    paddingBottom: theme.spacing(3),
    margin: theme.spacing(1)
  },
  confirmButton: {
    background: 'blue',
    color: '#fff'
  }
}))

const TaskInputCard = ({ setShowInput }) => {
  const classes = useStyle(); 

  return (
    <div>
      <div>
        <Paper className={classes.taskInputCard}>
          <InputBase 
            multiline 
            fullWidth 
            placeholder="Enter a title for this card..."
          />
        </Paper>
      </div>
      <div>
        <Button className={classes.confirmButton} onClick={() => setShowInput(false)}>
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