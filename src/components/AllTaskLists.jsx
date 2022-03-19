import { useContext } from 'react';

import List from './ui/Lists/List';
import { AllDataContext } from '../providers/AllDataContext';
import {makeStyles} from "@material-ui/core/styles";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCards from './TaskCards';
import AddNewTaskOrList from './AddNewTaskOrList';
import TotalTaskCardsCounter from './TotalTaskCardsCounter';
import { MakeDraggable, MakeDraggable2 } from './hocs/MakeDraggable';
const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex', 
    minHeight: '100vh',
    width: '100%', 
    overflowY: 'auto'
  }
}))

const AllTaskLists = () => {
  const classes = useStyle()
  const { data, updateOnDragEnd, updateListTitleHandler, deleteHandler } = useContext(AllDataContext)

  if (data === 'loading...') {
    return <h1>loading...</h1>
  }
  
  const allLists = data.listIds.map((listId, index) => {
    const list = data.lists[listId]; 
    return (
      <>
        <MakeDraggable key={`${listId}_`} id={`${listId}_`} index={index}>
          <List 
            key={listId} 
            index={index}
            value={{
              id: list.id,
              title: list.title,
              tasks: list.tasks,
            }} 
            onChange={updateListTitleHandler}
            onDelete={deleteHandler}
          >
            <TaskCards />
            {/* <CurrentlyInProgressTaskCard /> */}
            {/* <TotalTaskCardsCounter /> */}
          </List>
        </MakeDraggable>
      </>
    )
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
            <AddNewTaskOrList type="list"/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default AllTaskLists;
