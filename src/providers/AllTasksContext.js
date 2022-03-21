import React, { useEffect, useReducer } from 'react';
import useAxios from '../custom-hooks/useAxios';

const dataReducer = (currentData, action) => {
  const dataCopy = {...currentData};
  switch (action.type) {
    case 'GET':
      return action.tasks;
    case 'ADD-LIST':
      {
        const newList = {id: action.newId, title: action.content, tasks:[]}; 
        dataCopy.listIds.push(action.newId);
        dataCopy.lists[newList.id] = newList; 
        return dataCopy; 
      }
    case 'ADD-TASK':
      {
        const newTask = {content: action.content, list_id: action.list_id, id: action.newId}; 
        dataCopy.lists[action.list_id].tasks.push(newTask);
        return dataCopy;
      }
    case 'CHANGE-LIST-ORDER':
      {
        const draggableIdParsed = action.draggableId.slice(0, -1);
        const newListIdOrder = dataCopy.listIds; 
        newListIdOrder.splice(action.source.index, 1);
        newListIdOrder.splice(action.destination.index, 0, draggableIdParsed);
        return dataCopy;
      }
    case 'CHANGE-TASK-ORDER':
      {
        const sourceList = dataCopy.lists[action.sourceIdParsed];
        const destinationList = dataCopy.lists[action.destinationIdParsed]; 
        const draggingTask = sourceList.tasks.filter(task => task.id === parseInt(action.draggableId))[0];
        sourceList.tasks.splice(action.source.index, 1);
        draggingTask.list_id = destinationList.id;
        destinationList.tasks.splice(action.destination.index, 0, draggingTask);
        return dataCopy; 
      }
    case 'UPDATE-LIST-TITLE':
      {
        dataCopy.lists[action.listId].title = action.title; 
        return dataCopy; 
      }
    case 'DELETE-LIST':
      {
        delete dataCopy.lists[action.itemId]; 
        const listIndex = dataCopy.listIds.indexOf(action.itemId); 
        dataCopy.listIds.splice(listIndex, 1); 
        return dataCopy; 
      }
      case 'DELETE-TASK':
        {
        const newTasks = dataCopy.lists[action.list_id].tasks.filter(el => el.id !== action.itemId);
        dataCopy.lists[action.list_id].tasks = newTasks; 
        return dataCopy;
      }
    default:
      throw new Error('Should not get there1234234!');
  }
};

const AllTasksContext = React.createContext(); 

const AllTasksProvider = (props) => {

  const [allTasks, dispatchTasks] = useReducer(dataReducer, null);

  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear
  } = useAxios();


  useEffect(() => {
    const url = '/api/task/all';
    sendRequest(url, 'get', null, null, null, 'GET')
  }, []);


  useEffect(() => {
    if (!isLoading && !error) {
      if (reqIdentifier === 'GET') {
        dispatchTasks({tasks: data.data.refactoredData, type: 'GET'})
      } else if (reqIdentifier === 'ADD-list') {
        dispatchTasks({newId: data.data.insertedId, content: reqExtra.content, type: 'ADD-LIST'})
      } else if (reqIdentifier === 'ADD-task') {
        dispatchTasks({newId: data.data.insertedId, ...reqExtra, type: 'ADD-TASK'})
      } else if (reqIdentifier === 'UPDATE-LIST-TITLE') {
        dispatchTasks({...reqExtra, type: 'UPDATE-LIST-TITLE'})
      } else if (reqIdentifier === 'CHANGE-TASK-ORDER') {
        dispatchTasks({newId: data.data.insertedId, ...reqExtra, type: 'CHANGE-TASK-ORDER'})
      } else if (reqIdentifier === 'DELETE-list') {
        dispatchTasks({...reqExtra, type: 'DELETE-LIST'})
      } else if (reqIdentifier === 'DELETE-task') {
        dispatchTasks({...reqExtra, type: 'DELETE-TASK'})
      }
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const newAddHandler = (item) => {
    const {content, type, listIdParsed: listId} = item; 
    const url = `/api/${type}/add`;
    sendRequest(url, 'post', {title:content, listId}, null, {content, list_id: listId}, `ADD-${type}`)
  }  

  const updateListTitleHandler = (title, listId) => {
    const url = `/api/list/update-title`
    const body = {newTitle: title, listId}
    sendRequest(url, 'put', body, null, {title, listId}, 'UPDATE-LIST-TITLE')
  }

  const updateOnDragEnd = (responseult) => {
    const { destination, source, draggableId, type } = responseult; 
    if (!destination) return; 
    if (type === 'list') {
      dispatchTasks({destination, source, draggableId, type: 'CHANGE-LIST-ORDER'})
      return; 
    } 
    const sourceIdParsed = source.droppableId.slice(0, -1);
    const destinationIdParsed = destination.droppableId.slice(0, -1);
    const url = `/api/task/change-list-container`
    const body = {newListId: destinationIdParsed, taskId: draggableId}
    sendRequest(url, 'put', body, null, {sourceIdParsed, destinationIdParsed, source, destination, draggableId}, 'CHANGE-TASK-ORDER')
  }
  const deleteHandler = (item, type) => {
    const IdFromParams = item.id; 
    const url = `/api/${type}/delete/${IdFromParams}`;
    sendRequest(url, 'delete', null, null, {itemId: item.id, list_id: item.list_id}, `DELETE-${type}`)
  }

  return (
    <AllTasksContext.Provider value={
      { 
        allTasks, 
        isLoading,
        error,
        clear,
        newAddHandler, 
        updateOnDragEnd, 
        deleteHandler, 
        updateListTitleHandler
      }
      }>
      {props.children}
    </AllTasksContext.Provider>
  ) 
}

export {AllTasksContext, AllTasksProvider}