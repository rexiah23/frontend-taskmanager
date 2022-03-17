import React, { useContext } from 'react';
import { DraggableListContext } from './ui/Lists/DraggableList';
import ItemCard from './ui/Cards/ItemCard';

const TaskCards = () => {

  const { tasks } = useContext(DraggableListContext); 
  console.log('tasks', tasks);
  return (
    <>
    {tasks.map((task, index) => (
      <ItemCard 
        key={task.id} 
        value={{...task, index}}
      />
    ))}
    </>
  )
}

export default TaskCards