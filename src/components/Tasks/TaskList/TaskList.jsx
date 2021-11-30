import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TaskListTitle from './TaskListTitle';
import TaskCard from '../TaskCard';
import TaskInputContainer from '../TaskInput/TaskInputContainer';
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    width:"300px",
    backgroundColor:"#EBECF0",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }, 
  tasksContainer: {
    marginTop: theme.spacing(5)
  }
}));

const TaskList = ({ list }) => {
  const classes = useStyle();
  const taskCards = list.tasks.map ((task, index) => <TaskCard key={task.id} task={task} index={index}/>); 

  return (
  <div>
    <Paper className={classes.root}>
      <CssBaseline />
      <TaskListTitle title={list.title} listId={list.id}/>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              className={classes.tasksContainer}
              >
              {taskCards}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      <TaskInputContainer listId={list.id} type={"task"}/>
    </Paper>
  </div>
  );
};

export default TaskList;