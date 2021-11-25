import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, fade } from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3)
  }, 
  addTask: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1), 
    background:"#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.2)
    }
  }
}))

const TaskInputContainer = props => {
  const classes = useStyle(); 

  return (
    <div className={classes.root}>
      <Paper className={classes.addTask}>
        <Typography>
          + Add a new task
        </Typography>
      </Paper>
    </div>
  )
}
export default TaskInputContainer;