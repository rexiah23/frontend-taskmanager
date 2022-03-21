import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from '../components/custom-hooks/useAxios';

const AllDataContext = React.createContext(); 

const AllDataProvider = (props) => {
  
  // const [data, setData] = useState('loading...');

  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifer,
    clear
  } = useAxios();

  console.log('data', data)

  useEffect(() => {
    const url = '/api/task/all';
    sendRequest(url, 'get')
    // axios.get(url)
    // .then(response => {
    //   setData(response.data.refactoredData);
    // })
    // .catch(err => {
    //   console.log(err.message)
    // });
  }, []);

  const newAddHandler = (item) => {
    // console.log('this ran')
    // const {content, type, listIdParsed: listId} = item; 
    // const url = `/api/${type}/add`;
    // sendRequest(url, 'post', {title:content, listId})
    // .then(res => {
    //   console.log('RESSS IS THIS', res)
    // })

    axios.post(url, {title:content, listId})
    .then((response) => {
      const newId = response.data.insertedId
      setData(prev => {
        const dataCopy = {...prev};
        //if added item is a list, do the following
        if (type === 'list') {
          const newList = {id: newId, title:content, tasks:[]}; 
          dataCopy.listIds.push(newId);
          dataCopy.lists[newList.id] = newList; 
          return dataCopy; 
        } 
        //if added item is a task, do the following
        const newTask = {content: content, list_id: listId, id: newId}; 
        dataCopy.lists[listId].tasks.push(newTask);
        return dataCopy;
      })
    })
    .catch(err => console.log(err.message))
  }  

  const updateListTitleHandler = (title, listId) => {
    // const url = `/api/list/update-title`
    // const body = {newTitle: title, listId}
    // axios.put(url, body)
    // .then(() => {
    //   setData(prev => {
    //     const dataCopy = {...prev};
    //     dataCopy.lists[listId].title = title; 
    //     return dataCopy; 
    //   });
    // })
    // .catch(err => console.log(err.message));
  }

  const updateOnDragEnd = (responseult) => {
    // const { destination, source, draggableId, type } = responseult; 
  
    // if (!destination) return; 

    // if (type === 'list') {
    //   setData(prev => {
    //     const dataCopy = {...prev}; 
    //     const draggableIdParsed = draggableId.slice(0, -1);
    //     const newListIdOrder = dataCopy.listIds; 
    //     newListIdOrder.splice(source.index, 1);
    //     newListIdOrder.splice(destination.index, 0, draggableIdParsed);
    //     return dataCopy;
    //   })
    //   return; 
    // }

    // const sourceIdParsed = source.droppableId.slice(0, -1);
    // const destinationIdParsed = destination.droppableId.slice(0, -1);
    // const url = `/api/task/change-list-container`
    // const body = {newListId: destinationIdParsed, taskId: draggableId}
    // axios.put(url, body)
    // .then(() => {
    //   setData(prev => {
    //     const dataCopy = {...prev};
    //     const sourceList = dataCopy.lists[sourceIdParsed];
    //     const destinationList = dataCopy.lists[destinationIdParsed]; 
    //     const draggingTask = sourceList.tasks.filter(task => task.id === parseInt(draggableId))[0];
    //     sourceList.tasks.splice(source.index, 1);
    //     draggingTask.list_id = destinationList.id;
    //     destinationList.tasks.splice(destination.index, 0, draggingTask);
    //     return dataCopy; 
    //   });
    // })
    // .catch(err => console.log(err.message));
  }

  const deleteHandler = (item, type) => {
    // const IdFromParams = item.id; 
    //   const url = `/api/${type}/delete/${IdFromParams}`;
    //   axios.delete(url)
    //   .then(() => {
    //     setData(prev => {
    //       const dataCopy = {...prev};
    //       //if task deleted, do the following:
    //       if (type === 'task') {
    //         const newTasks = dataCopy.lists[item.list_id].tasks.filter(el => el.id !== IdFromParams);
    //         dataCopy.lists[item.list_id].tasks = newTasks; 
    //         return dataCopy;
    //       }
    //       //if list deleted, do the following:
    //       delete dataCopy.lists[IdFromParams]; 
    //       const listIndex = dataCopy.listIds.indexOf(IdFromParams); 
    //       dataCopy.listIds.splice(listIndex, 1); 
    //       return dataCopy;
    //     })
    //   })
    //   .catch(err => console.log(err.message))
  }

  return (
    <AllDataContext.Provider value={{ data, newAddHandler, updateOnDragEnd, deleteHandler, updateListTitleHandler}}>
      {props.children}
    </AllDataContext.Provider>
  ) 
}

export {AllDataContext, AllDataProvider}