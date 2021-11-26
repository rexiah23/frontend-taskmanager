import React, { useState } from 'react';
import { Collapse, Paper, Typography } from '@material-ui/core';
import { makeStyles, fade } from "@material-ui/core/styles";
import TaskInputCard from '../../ui/Cards/TaskInputCard';


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
  const [showInput, setShowInput] = useState(false);
  const classes = useStyle(); 

  return (
    <div className={classes.root}>
      <Collapse in={showInput}>
        <TaskInputCard />
      </Collapse>
      <Collapse in={!showInput}>
        <Paper 
          className={classes.addTask} 
          elevation={0}
          onClick={() => setShowInput(prev => !prev)}
          >
          <Typography>
            + Add a new card
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}
export default TaskInputContainer;