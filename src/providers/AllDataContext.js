import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllDataContext = React.createContext(); 

const AllDataProvider = (props) => {

  const [data, setData] = useState('loading...');
  const [dataChanged, setDataChanged] = useState(false); 

  useEffect(() => {
    const url = 'http://localhost:8080/api/data';
    axios.get(url)
    .then(res => {
      setData(res.data.response);
    })
    .catch(err => {
      console.log(err.message)
    });
  }, []);

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
    setDataChanged(true);
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
    setDataChanged(true);
  };

  const updateListTitle = (title, listId) => {
    setData(prev => {
      const dataCopy = {...prev};
      dataCopy.lists[listId].title = title; 
      return dataCopy; 
    });
    setDataChanged(true);
  };

  const updateOnDragEnd = (result) => {
    const { destination, source, draggableId, type } = result; 

    if (!destination) return; 

    if (type === 'list') {
      setData(prev => {
        const dataCopy = {...prev}; 
        const newListIdOrder = dataCopy.listIds; 
        newListIdOrder.splice(source.index, 1);
        newListIdOrder.splice(destination.index, 0, draggableId);
        return dataCopy;
      })
      return; 
    }

    setData(prev => {
      const dataCopy = {...prev};
      const sourceList = dataCopy.lists[source.droppableId];
      const destinationList = dataCopy.lists[destination.droppableId];
      const draggingTask = sourceList.tasks.filter(task => task.id === draggableId)[0];       
      sourceList.tasks.splice(source.index, 1);
      destinationList.tasks.splice(destination.index, 0, draggingTask);
      return dataCopy; 
    });
    setDataChanged(true);
  };

  const submitChangesToApi = () => {
    setDataChanged(false);
  }

  const deleteHandler = (item, type) => {
      const IdFromParams = item.id; 
      const url = `http://localhost:8080/api/data/delete/${IdFromParams}`;
      const body = { data: {type}};
      axios.delete(url, body)
      .then(res => {
        setData(prev => {
          const dataCopy = {...prev};
          //if item to delete is a task, do the following:
          if (type === 'task') {
            const newTasks = dataCopy.lists[item.list_id].tasks.filter(el => el.id !== IdFromParams);
            dataCopy.lists[item.list_id].tasks = newTasks; 
            return dataCopy;
          }
          //if item to delete is a list, do the following:
          delete dataCopy.lists[IdFromParams]; 
          const listIndex = dataCopy.listIds.indexOf(IdFromParams); 
          dataCopy.listIds.splice(listIndex, 1); 
          return dataCopy;
        })
      })
    }


  return (
    <AllDataContext.Provider value={{ data, dataChanged, addNewTask, addNewList, updateListTitle, updateOnDragEnd, submitChangesToApi, deleteHandler}}>
      {props.children}
    </AllDataContext.Provider>
  ) 
}

export {AllDataContext, AllDataProvider}