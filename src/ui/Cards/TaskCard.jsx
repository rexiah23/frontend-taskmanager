import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
  taskCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1),
    textAlign: 'left'
  }
}))

const TaskCard = ({ card }) => {
  const classes = useStyle(); 

  return (
    <div>
      <Paper className={classes.taskCard}>{card.title}</Paper>
    </div>
  )
}
export default TaskCard;