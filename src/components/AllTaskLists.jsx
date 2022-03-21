import { useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'

import { AllDataContext } from '../providers/AllDataContext'
import TaskCards from './TaskCards'
import AddNewTaskOrList from './AddNewTaskOrList'
import List from './ui/Lists/List'
import { MakeDraggable } from './wrappers/MakeDraggable'
import { MakeDroppable } from './wrappers/MakeDroppable'

const useStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		width: '100%',
		overflowY: 'auto',
	},
	lists: {
		display: 'flex',
	},
}))

const AllTaskLists = () => {
	const classes = useStyle()
	const { data, updateOnDragEnd, updateListTitleHandler, deleteHandler } =
		useContext(AllDataContext)

	if (data === 'loading...') {
		return <h1>loading...</h1>
	}

	const allLists = data.listIds.map((listId, index) => {
		const list = data.lists[listId]
		return (
			<>
				<MakeDraggable key={`${list.id}_`} id={`${list.id}_`} index={index}>
					<List
						key={list.id}
						index={index}
						value={{
							id: list.id,
							title: list.title,
							tasks: list.tasks,
						}}
						onChange={updateListTitleHandler}
						onDelete={deleteHandler}
					>
						<TaskCards />
						{/* <CurrentlyInProgressTaskCard /> */}
						{/* <TotalTaskCardsCounter /> */}
					</List>
				</MakeDraggable>
			</>
		)
	})

	return (
		<DragDropContext onDragEnd={updateOnDragEnd}>
			<div className={classes.root}>
				<MakeDroppable id="app" type="list" direction="horizontal">
					<div className={classes.lists}>
						{allLists}
						<AddNewTaskOrList type="list" />
					</div>
				</MakeDroppable>
			</div>
		</DragDropContext>
	)
}

export default AllTaskLists
