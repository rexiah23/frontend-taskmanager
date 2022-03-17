import React, { createContext, useMemo } from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import DraggableListTitle from './DraggableListTitle';
import AddNewTaskOrList from '../../AddNewTaskOrList';
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

export const DraggableListContext = createContext(); 
const DraggableList = ({ 
  value, 
  onChange, 
  children, 
}) => {
  const classes = useStyle()

  const memoizedState = useMemo(() => ({
    ...value, 
  }), [value])

  const changeTitleHandler = (newTitle) => {
    onChange(newTitle, memoizedState.id)
  }

  return (
  <DraggableListContext.Provider value={memoizedState}>
    <Draggable draggableId={`${memoizedState.id}_`} index={memoizedState.index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <DraggableListTitle value={memoizedState.title} onChange={changeTitleHandler} onDelete={memoizedState.deleteHandler}/>
              <Droppable droppableId={`${memoizedState.id}_`}>
                {(provided) => (
                  <div 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                    className={classes.tasksContainer}
                  >

                    {children}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            <AddNewTaskOrList listId={`${memoizedState.id}_`} type="task"/>
          </Paper>
        </div>
      )}
    </Draggable>
  </DraggableListContext.Provider>
  );
};

export default DraggableList;