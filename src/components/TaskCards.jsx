import React, { useContext } from 'react'
import { ListContext } from './ui/Lists/List'
import { MakeDraggable } from './wrappers/MakeDraggable'

import ItemCard from './ui/Cards/ItemCard'

const TaskCards = () => {
	const { tasks, onDelete } = useContext(ListContext)

	const deleteItemCardHandler = (task) => {
		onDelete(task, 'task')
	}

	return (
		<div>
			{tasks.map((task, index) => (
				<MakeDraggable key={task.id} id={task.id} index={index}>
					<ItemCard
						key={task.id}
						value={task}
						onDelete={deleteItemCardHandler}
					/>
				</MakeDraggable>
			))}
		</div>
	)
}

export default TaskCards
