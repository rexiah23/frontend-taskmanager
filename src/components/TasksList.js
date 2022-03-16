import { useContext } from 'react';

import DraggableList from './ui/Lists/DraggableList';
import { AllDataContext } from '../providers/AllDataContext';
import {makeStyles} from "@material-ui/core/styles";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './ui/Tasks/TaskCard';
import AddNewItemInput from './ui/Input/AddNewItemInput';
const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex', 
    minHeight: '100vh',
    width: '100%', 
    overflowY: 'auto'
  }
}))

const TasksList = () => {
  const classes = useStyle()
  const { data, updateOnDragEnd, deleteHandler } = useContext(AllDataContext)

  if (data === 'loading...') {
    return <h1>loading...</h1>
  }
  
  const allLists = data.listIds.map((listId, index) => {
    const list = data.lists[listId]; 
    return <DraggableList 
      key={listId} 
      value={list} 
      index={index} 
    >
      {list.tasks.map((task, index) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          index={index}
          deleteHandler={deleteHandler}
        />
      ))}
    </DraggableList>
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
            <AddNewItemInput type="list"/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TasksList;
