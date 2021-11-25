import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TaskListTitle from './TaskListTitle';
import TaskCard from '../../ui/Cards/TaskCard';
import TaskInputContainer from '../TaskInput/TaskInputContainer';

const useStyle = makeStyles((theme) => ({
  root: {
    width:"300px",
    backgroundColor:"#EBECF0",
    marginLeft:theme.spacing(1)
  }
}))

const TaskList = props => {
  const classes = useStyle();
  return (
  <div>
    <Paper className={classes.root}>
      <CssBaseline />
      <TaskListTitle />
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskInputContainer/>
    </Paper>
  </div>);
}

export default TaskList;