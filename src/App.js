import { useContext } from 'react';
import TaskList from './components/Tasks/TaskList/TaskList';
import { AllTasksContext } from './providers/AllTasksContext';
import {makeStyles} from "@material-ui/core/styles";
import TaskInputContainer from './components/Tasks/TaskInput/TaskInputContainer';
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex', 
    minHeight: '100vh',
    background: 'green',
    width: '100%', 
    overflowY: 'auto'
  }
}))

function App() {
  const { data, updateOnDragEnd } = useContext(AllTasksContext);
  const classes = useStyle(); 
  const allLists = data.listIds.map(listId => {
    const list = data.lists[listId]; 
    return <TaskList key={listId} list={list}/>
  });

  return (
    <DragDropContext onDragEnd={updateOnDragEnd}>
      <div className={classes.root}>
        {allLists}
        <TaskInputContainer type="list"/>
      </div>
    </DragDropContext>
  );
}

export default App;
