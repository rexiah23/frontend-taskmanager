import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
  taskCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1)
  }
}))

const TaskCard = props => {
  const classes = useStyle(); 

  return (
    <div>
      <Paper className={classes.taskCard}>
        <Typography>
          TaskInputContainer!
        </Typography>
      </Paper>
    </div>
  )
}
export default TaskCard;