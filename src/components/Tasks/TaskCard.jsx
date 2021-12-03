import React from 'react';
import { IconButton, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from 'react-beautiful-dnd';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const useStyle = makeStyles((theme) => ({
  taskCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1),
    textAlign: 'left',
    "&:hover":{
      background:"#ddd"
    }
  },
  button: {
    textAlign: 'right',
  }
 })); 


const TaskCard = ({ task, index, deleteHandler }) => {
  const classes = useStyle(); 

  return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <Paper className={classes.taskCard}>
              {task.content}
              <IconButton className={classes.button} onClick={() => deleteHandler(task, 'task')}>
                <RemoveCircleOutlineIcon fontSize='small'/>
              </IconButton>
            </Paper>
          </div>
        )}
      </Draggable>
  );

};

export default TaskCard;