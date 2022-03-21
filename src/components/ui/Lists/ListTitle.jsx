import React, { useState } from 'react'
import { IconButton, InputBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const useStyle = makeStyles((theme) => ({
	editableTitleContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	editableTitle: {
		marginLeft: theme.spacing(1),
		marginTop: theme.spacing(1),
		fontWeight: 'bold',
	},
	editableTitleInput: {
		margin: theme.spacing(1),
		'&:focus': {
			background: '#ddd',
		},
	},
}))

const ListTitle = ({ value, onChange, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [temporaryTitle, setTemporaryTitle] = useState(value)

	const saveTemporaryTitleHandler = () => {
		onChange(temporaryTitle)
		setIsEditing(false)
	}

	const changeTemporaryTitleHandler = (event) => {
		setTemporaryTitle(event.target.value)
	}

	// const deleteTemporaryTitle = () => {
	//   onDelete(temporaryTitle)
	// }

	const classes = useStyle()
	return (
		<div>
			{isEditing && (
				<div>
					<InputBase
						value={temporaryTitle}
						inputProps={{
							className: classes.editableTitleInput,
						}}
						fullWidth
						onBlur={saveTemporaryTitleHandler}
						autoFocus
						onChange={changeTemporaryTitleHandler}
					/>
				</div>
			)}
			{!isEditing && (
				<div className={classes.editableTitleContainer}>
					<Typography
						onClick={() => setIsEditing(true)}
						className={classes.editableTitle}
					>
						{value}
					</Typography>
					{/* <IconButton onClick={deleteTemporaryTitle}>
        <MoreHorizIcon />  
      </IconButton> */}
				</div>
			)}
		</div>
	)
}

export default ListTitle
