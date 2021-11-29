import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import staticData from './data/staticData';

function App() {
  const [data, setData] = useState(staticData); 

  const allLists = data.listIds.map(listId => {
    const currList = data.lists[listId]; 
    return <TaskList key={listId} list={currList}/>
  });

  return (
    <div className="App">
      {allLists}
    </div>
  );
}

export default App;
