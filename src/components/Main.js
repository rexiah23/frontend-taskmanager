import { useContext } from 'react';
import TaskList from './Tasks/TaskList';
import { AllDataContext } from '../providers/AllDataContext';
import {makeStyles} from "@material-ui/core/styles";
import TaskInputContainer from './Tasks/TaskInputContainer';
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
  const { data, updateOnDragEnd } = useContext(AllDataContext);

  if (data === 'loading...') {
    return <h1>loading...</h1>
  }

  const allLists = data.listIds.map((listId, index) => {
    const list = data.lists[listId]; 
    return <TaskList key={listId} list={list} index={index}/>
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
            <TaskInputContainer type="list" />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Main;
