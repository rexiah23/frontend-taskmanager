import { useContext } from 'react'

import DraggableList from './ui/Lists/DraggableList'
import { AllTasksContext } from '../providers/AllTasksContext'
import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import AddNewItemInput from './AddNewTaskOrList'
import TaskCards from './TaskCards'
import TotalTaskCardsCounter from './TotalTaskCardsCounter'
const useStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		width: '100%',
		overflowY: 'auto',
	},
}))

const CommentsList = () => {
	const classes = useStyle()
	const { data, updateOnDragEnd, updateListTitleHandler } =
		useContext(AllTasksContext)

	if (data === 'loading...') {
		return <h1>loading...</h1>
	}

	const allLists = data.listIds.map((listId, index) => {
		const list = data.lists[listId]
		return (
			<DraggableList
				key={listId}
				value={{ ...list, index }}
				onChange={updateListTitleHandler}
			>
				<TaskCards />
			</DraggableList>
		)
	})

	return (
		<DragDropContext onDragEnd={updateOnDragEnd}>
			<Droppable droppableId="app" type="list" direction="horizontal">
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className={classes.root}
					>
						{allLists}
						<AddNewItemInput type="list" />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default CommentsList
