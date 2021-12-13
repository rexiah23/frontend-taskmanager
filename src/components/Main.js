import { useContext } from 'react';
import List from './Lists/List';
import { AllDataContext } from '../providers/AllDataContext';
import {makeStyles} from "@material-ui/core/styles";
import InputContainer from './Input/InputContainer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex', 
    minHeight: '100vh',
    width: '100%', 
    overflowY: 'auto'
  }
}))

const Main = () => {
  const classes = useStyle(); 
  const { data, updateOnDragEnd, deleteHandler } = useContext(AllDataContext);

  if (data === 'loading...') {
    return <h1>loading...</h1>
  }
  
  const allLists = data.listIds.map((listId, index) => {
    const list = data.lists[listId]; 
    return <List key={listId} list={list} index={index} deleteHandler={deleteHandler} />
  });

  return (
    <DragDropContext onDragEnd={updateOnDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.root}>
            {allLists}
            <InputContainer type="list"/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Main;
