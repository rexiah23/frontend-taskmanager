import { Droppable } from 'react-beautiful-dnd'

export const MakeDroppable = ({ id, children, type, direction }) => {
	return (
		<Droppable droppableId={`${id}`} type={type} direction={direction}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					{children}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}
