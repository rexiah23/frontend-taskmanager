import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme) => ({
  taskCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1),
    textAlign: 'left'
  }
}))

const TaskCard = ({ task, index }) => {
  const classes = useStyle(); 

  return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <Paper className={classes.taskCard}>{task.content}</Paper>
          </div>
        )}
      </Draggable>
  );

};

export default TaskCard;