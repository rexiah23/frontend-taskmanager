import React, { useContext } from 'react';
import { DraggableListContext } from './ui/Lists/List';
import { MakeDraggable } from './hocs/MakeDraggable';

import ItemCard from './ui/Cards/ItemCard';

const TaskCards = () => {

  const { tasks, onDelete } = useContext(DraggableListContext); 

  const deleteItemCardHandler = (task) => {
    onDelete(task, 'task')
  }

  return (
    <>
      {tasks.map((task, index) => (
        <MakeDraggable key={task.id} id={task.id} index={index}>
          <ItemCard 
            key={task.id} 
            value={task}
            onDelete={deleteItemCardHandler}
          />
        </MakeDraggable>
      ))}
    </>
  )
}

export default TaskCards