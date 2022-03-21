import { Paper, Typography } from '@material-ui/core'
import { makeStyles, alpha } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
	root: {
		width: '300px',
	},
	addTask: {
		padding: theme.spacing(1, 1, 1, 2),
		margin: theme.spacing(1),
		background: '#EBECF0',
		'&:hover': {
			backgroundColor: alpha('#000', 0.2),
		},
	},
}))

const AddItemButton = ({ label, onClick }) => {
	const classes = useStyle()
	return (
		<Paper className={classes.addTask} elevation={0} onClick={onClick}>
			<Typography>{label}</Typography>
		</Paper>
	)
}

export default AddItemButton
