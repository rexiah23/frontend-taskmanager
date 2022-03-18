import { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const withDraggable = WrappedComponent => {
  class withDraggable extends Component {
    render () {
      return (
        <Draggable draggableId={`${this.props.value.id}`} index={this.props.value.index}>
        {(provided) => {
          return (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <WrappedComponent {...this.props}/>
            {provided.placeholder}
          </div>
          )
        }}
      </Draggable>
      )
    }
  }
  return withDraggable; 
}