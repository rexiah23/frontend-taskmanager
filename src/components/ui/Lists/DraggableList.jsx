import React, { createContext, useMemo, useContext } from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import DraggableListTitle from './DraggableListTitle';
import InputContainer from '../Input/AddNewItemInput';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { AllDataContext } from '../../../providers/AllDataContext';

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

const DraggableListContext = createContext(); 
const DraggableList = ({ 
  children, 
  value, 
  index, 
  id = null, 
  title = null, 
}) => {
  const { deleteHandler, updateListTitleHandler } = useContext(AllDataContext)

  const classes = useStyle()

  const memoizedState = useMemo(() => ({
    ...value, 
    ...deleteHandler,
  }), [value, deleteHandler])

  const handleTitleChange = (newTitle) => {
    updateListTitleHandler(newTitle, value.id)
  }

  return (
  <DraggableListContext.Provider value={memoizedState}>
    <Draggable draggableId={`${id ? id : value.id}_`} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <DraggableListTitle value={title ? title : value.title} onChange={handleTitleChange}/>
              <Droppable droppableId={`${id ? id : value.id}_`}>
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
            <InputContainer listId={`${id ? id : value.id}_`} type="task"/>
          </Paper>
        </div>
      )}
    </Draggable>
  </DraggableListContext.Provider>
  );
};

export default DraggableList;