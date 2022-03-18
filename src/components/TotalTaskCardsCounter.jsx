import React, { useContext } from 'react'; 
import ItemCard from './ui/Cards/ItemCard';
import { DraggableListContext } from './ui/Lists/List';

const TotalTaskCardsCounter = () => {

  const {tasks} = useContext(DraggableListContext)

  return (
    <ItemCard value={tasks.length} onChange={() => {}}/>
  )
}

export default TotalTaskCardsCounter