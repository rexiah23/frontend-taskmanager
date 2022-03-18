import { Droppable } from 'react-beautiful-dnd';

export const MakeDroppable = ({ id, children }) => {
  return (
    <Droppable droppableId={`${id}`}>
      {(provided) => (
        <div 
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
