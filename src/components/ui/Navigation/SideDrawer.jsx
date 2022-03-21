import { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Grow } from '@material-ui/core'
import colors from '../../../colors/colors'
import { ColorsAndImagesContext } from '../../../providers/ColorsAndImagesContext'
import DisplayBox from '../Display/DisplayBox'

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: '400px',
	},
	// menuContainer: {
	// 	display: 'flex',
	// 	justifyContent: 'space-around',
	// 	flexWrap: 'wrap',
	// },
	// menu: {
	// 	display: 'flex',
	// 	justifyContent: 'space-around',
	// 	flexWrap: 'wrap',
	// },
	// box: {
	// 	width: '45%',
	// 	height: '90px',
	// 	background: 'grey',
	// 	display: 'flex',
	// 	alignItems: 'flex-end',
	// 	borderRadius: '8px',
	// 	marginTop: theme.spacing(2),
	// },
	// optionsContainer: {
	// 	display: 'flex',
	// 	flexWrap: 'wrap',
	// 	justifyContent: 'space-around',
	// },
}))

const SideDrawer = ({ isOpen, onToggle, children }) => {
	const classes = useStyles()

	return (
		<div>
			<Drawer open={isOpen} anchor="right" onClose={() => onToggle(false)}>
				<div className={classes.drawer}>{children}</div>
			</Drawer>
		</div>
	)
}

export default SideDrawer
