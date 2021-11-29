import { useContext } from 'react';
import TaskList from './components/Tasks/TaskList/TaskList';
import { AllTasksContext } from './providers/AllTasksContext';

function App() {
  const { data } = useContext(AllTasksContext);

  const allLists = data.listIds.map(listId => {
    const list = data.lists[listId]; 
    return <TaskList key={listId} list={list}/>
  });

  return (
    <div className="App">
      {allLists}
    </div>
  );
}

export default App;
