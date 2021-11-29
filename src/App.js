import { useContext } from 'react';
import TaskList from './components/Tasks/TaskList/TaskList';
import { AllTasksContext } from './providers/AllTasksContext';
import {makeStyles} from "@material-ui/core/styles";
import TaskInputContainer from './components/Tasks/TaskInput/TaskInputContainer';

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
  const { data } = useContext(AllTasksContext);
  const classes = useStyle(); 
  const allLists = data.listIds.map(listId => {
    const list = data.lists[listId]; 
    return <TaskList key={listId} list={list}/>
  });

  return (
    <div className={classes.root}>
      {allLists}
      <TaskInputContainer type="list"/>
    </div>
  );
}

export default App;
