import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ListTitle from './ListTitle';
import TaskCard from '../Tasks/TaskCard';
import InputContainer from '../Input/InputContainer';
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

const List = ({ list, index, deleteHandler }) => {
  const classes = useStyle();
  const taskCards = list.tasks.map ((task, index) => (
    <TaskCard 
      key={task.id} 
      task={task} 
      index={index}
      deleteHandler={deleteHandler}
      />
  ));

  return (
  <Draggable draggableId={list.id} index={index}>
    {(provided) => (
      <div {...provided.draggableProps} ref={provided.innerRef}>
        <Paper className={classes.root} {...provided.dragHandleProps}>
          <CssBaseline />
          <ListTitle title={list.title} list={list} deleteHandler={deleteHandler}/>
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
          <InputContainer listId={list.id} type="task"/>
        </Paper>
      </div>
    )}
  </Draggable>
  );
};

export default List;