import React from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

const useStyle = makeStyles((theme) => ({
  taskInputCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1)
  }
}))

const TaskInputCard = props => {
  const classes = useStyle(); 

  return (
    <div>
      <div>
        <Paper className={classes.taskInputCard}>
          <InputBase multiline fullWidth />
        </Paper>
      </div>
      <div>
        <Button>Add Task</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}
export default TaskInputCard;