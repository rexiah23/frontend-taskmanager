import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Grow } from '@material-ui/core'
import colors from '../../../colors/colors'
import { ColorsAndImagesContext } from '../../../providers/ColorsAndImagesContext'

const useStyles = makeStyles((theme) => ({
	box: {
		width: '45%',
		height: '90px',
		background: 'grey',
		display: 'flex',
		alignItems: 'flex-end',
		borderRadius: '8px',
		marginTop: theme.spacing(2),
	},
}))

const DisplayBox = ({ onClick, background, style: userStyles = null }) => {
	const classes = useStyles()

	return <div className={classes.box} onClick={onClick} style={userStyles} />
}

export default DisplayBox
