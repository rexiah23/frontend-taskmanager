import { useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'

import { AllTasksContext } from '../providers/AllTasksContext'
import TaskCards from './TaskCards'
import AddNewTaskOrList from './AddNewTaskOrList'
import List from './ui/Lists/List'
import { MakeDraggable } from './wrappers/MakeDraggable'
import { MakeDroppable } from './wrappers/MakeDroppable'
import ErrorModal from './ui/Modals/ErrorModal'
import LoadingModal from './ui/Modals/LoadingModal'

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

	const {
		allTasks,
		isLoading,
		error,
		clear,
		updateOnDragEnd,
		updateListTitleHandler,
		deleteHandler,
	} = useContext(AllTasksContext)

	return (
		<DragDropContext onDragEnd={updateOnDragEnd}>
			<div className={classes.root}>
				{error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
				<MakeDroppable id="app" type="list" direction="horizontal">
					<div className={classes.lists}>
						{allTasks &&
							allTasks.listIds.map((listId, index) => {
								const list = allTasks.lists[listId]
								return (
									<MakeDraggable
										key={`${list.id}_`}
										id={`${list.id}_`}
										index={index}
									>
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
											{/* <CurrentlyInProgressTaskCard />
												<TotalTaskCardsCounter /> */}
										</List>
									</MakeDraggable>
								)
							})}

						<AddNewTaskOrList type="list" />
					</div>
				</MakeDroppable>
			</div>
		</DragDropContext>
	)
}

export default AllTaskLists
