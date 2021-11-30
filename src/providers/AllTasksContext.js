import React, { useState } from 'react';

const AllTasksContext = React.createContext(); 

const AllTasksProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: 'task-1',
      content: 'Learning how to cook',
    },
    {
      id: 'task-2',
      content: 'Making sandwich',
    },
    {
      id: 'task-3',
      content: 'Taking the trash out',
    },
  ]);

  const [data, setData] = useState({
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'ToDo',
        tasks,
      },
    },
    listIds: ['list-1'],
  });

  const addNewTask = (content, listId) => {
    setData(prev => {
      const dataCopy = {...prev};
      const newTaskId = `task-${parseInt(dataCopy.lists[listId].tasks.length) + 1}`; 
      const newTask = { 
        id: newTaskId, 
        content
      }
      dataCopy.lists[listId].tasks.push(newTask); 
      return dataCopy;
    });
  };

  const addNewList = title => {
    setData(prev => {
      const dataCopy = {...prev};
      const newListId = `list-${parseInt(dataCopy.listIds.length) + 1}`; 
      const newList =  {
          id: newListId, 
          title,
          tasks: []
        };
      dataCopy.lists[newListId] = newList; 
      dataCopy.listIds.push(newListId); 
      return dataCopy; 
    });
  };

  const updateListTitle = (title, listId) => {
    setData(prev => {
      const dataCopy = {...prev};
      dataCopy.lists[listId].title = title; 
      return dataCopy; 
    });
  };

  const updateOnDragEnd = (result) => {
    const { destination, source, draggableId } = result; 

    if (!destination) return; 

    if (source.droppableId === destination.droppableId) {
      setData(prev => {
        const dataCopy = {...prev};
        const sourceList = dataCopy.lists[source.droppableId];
        const destinationList = dataCopy.lists[destination.droppableId];
        const draggingTask = sourceList.tasks.filter(task => task.id === draggableId)[0];       
        sourceList.tasks.splice(source.index, 1);
        destinationList.tasks.splice(destination.index, 0, draggingTask);
        return dataCopy; 
      });
    };
  };

  return (
    <AllTasksContext.Provider value={{tasks, data, addNewTask, addNewList, updateListTitle, updateOnDragEnd}}>
      {props.children}
    </AllTasksContext.Provider>
  ) 
}

export {AllTasksContext, AllTasksProvider}