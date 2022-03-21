import { Draggable } from 'react-beautiful-dnd'

export const MakeDraggable = ({ id, index, children }) => {
	return (
		<Draggable draggableId={`${id}`} index={index}>
			{(provided) => {
				return (
					<div
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						{...provided.draggableProps}
					>
						{children}
						{provided.placeholder}
						{provided.placeholder}
					</div>
				)
			}}
		</Draggable>
	)
}
