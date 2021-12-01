import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TaskListTitle from './TaskListTitle';
import TaskCard from './TaskCard';
import TaskInputContainer from './TaskInputContainer';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    width:"300px",
    backgroundColor:"#EBECF0",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }, 
  tasksContainer: {
    marginTop: theme.spacing(3)
  }
}));

const TaskList = ({ list, index }) => {
  const classes = useStyle();
  const taskCards = list.tasks.map ((task, index) => <TaskCard key={task.id} task={task} index={index}/>); 

  return (
  <Draggable draggableId={list.id} index={index}>
    {(provided) => (
      <div {...provided.draggableProps} ref={provided.innerRef}>
        <Paper className={classes.root} {...provided.dragHandleProps}>
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
          <TaskInputContainer listId={list.id} type="task"/>
        </Paper>
      </div>
    )}
  </Draggable>
  );
};

export default TaskList;