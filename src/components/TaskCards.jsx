import React, { useContext } from 'react';
import { DraggableListContext } from './ui/Lists/DraggableList';
import ItemCard from './ui/Cards/ItemCard';
import { withDraggable } from './hocs/withDraggable';

const TaskCards = () => {

  const { tasks } = useContext(DraggableListContext); 

  const DraggableTaskCard = withDraggable(ItemCard);

  return (
    <>
    {tasks.map((task, index) => (
      <DraggableTaskCard 
        key={task.id} 
        value={{...task, index}}
      />
    ))}
    </>
  )
}

export default TaskCards