import React, { useContext } from 'react'; 
import ItemCard from './ui/Cards/ItemCard';
import { ListContext } from './ui/Lists/List';

const TotalTaskCardsCounter = () => {

  const {tasks} = useContext(ListContext)

  return (
    <ItemCard value={tasks.length} onChange={() => {}}/>
  )
}

export default TotalTaskCardsCounter