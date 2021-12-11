import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllDataContext = React.createContext(); 

const AllDataProvider = (props) => {

  const [data, setData] = useState('loading...');
  const [dataChanged, setDataChanged] = useState(false); 

  useEffect(() => {
    const url = 'http://localhost:8080/api/task/all';
    axios.get(url)
    .then(response => {
      console.log('original ', response.data.refactoredData)
      setData(response.data.refactoredData);
    })
    .catch(err => {
      console.log(err.message)
    });
  }, []);

  const newAddHandler = (item) => {
    const {title, type, listId} = item; 
    const url = `http://localhost:8080/api/${type}/add`;
    axios.post(url, {title, listId})
    .then((response) => {
      setData(prev => {
        const dataCopy = {...prev};
        //if list added, do the following
        if (type === 'list') {
          const newList = {...response.data.insertedListValue, tasks:[]}; 
          dataCopy.listIds.push(newList.id);
          dataCopy.lists[newList.id] = newList; 
          return dataCopy; 
        } 
        //if task added, do the following
        const newTask = response.data.insertedTaskValue; 
        dataCopy.lists[newTask.list_id].tasks.push(newTask);
        return dataCopy;
      })
    })
    .catch(err => console.log(err.message))
  }  

  const updateListTitleHandler = (title, listId) => {
    const url = `http://localhost:8080/api/list/update-title`
    const body = {newTitle: title, listId}
    axios.put(url, body)
    .then(() => {
      setData(prev => {
        const dataCopy = {...prev};
        dataCopy.lists[listId].title = title; 
        return dataCopy; 
      });
    });
  };

  const updateOnDragEnd = (responseult) => {
    const { destination, source, draggableId, type } = responseult; 

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
    
    const url = `http://localhost:8080/api/task/change-list-container`
    const body = {newListId: destination.droppableId, taskId: draggableId}
    axios.put(url, body)
    .then(() => {
      setData(prev => {
          const dataCopy = {...prev};
          const sourceList = dataCopy.lists[source.droppableId];
          const destinationList = dataCopy.lists[destination.droppableId];
          const draggingTask = sourceList.tasks.filter(task => task.id === draggableId)[0];       
          sourceList.tasks.splice(source.index, 1);
          draggingTask.list_id = destinationList.id;
          destinationList.tasks.splice(destination.index, 0, draggingTask);
          return dataCopy; 
      });
    });
  };

  const submitChangesToApi = () => {
    setDataChanged(false);
  }

  const deleteHandler = (item, type) => {
    const IdFromParams = item.id; 
      const url = `http://localhost:8080/api/${type}/delete/${IdFromParams}`;
      axios.delete(url)
      .then(response => {
        setData(prev => {
          const dataCopy = {...prev};
          //if task deleted, do the following:
          if (type === 'task') {
            const newTasks = dataCopy.lists[item.list_id].tasks.filter(el => el.id !== IdFromParams);
            dataCopy.lists[item.list_id].tasks = newTasks; 
            return dataCopy;
          }
          //if list deleted, do the following:
          delete dataCopy.lists[IdFromParams]; 
          const listIndex = dataCopy.listIds.indexOf(IdFromParams); 
          dataCopy.listIds.splice(listIndex, 1); 
          return dataCopy;
        })
      })
      .catch(err => console.log(err.message))
    }

  return (
    <AllDataContext.Provider value={{ data, dataChanged, newAddHandler, updateOnDragEnd, submitChangesToApi, deleteHandler, updateListTitleHandler}}>
      {props.children}
    </AllDataContext.Provider>
  ) 
}

export {AllDataContext, AllDataProvider}