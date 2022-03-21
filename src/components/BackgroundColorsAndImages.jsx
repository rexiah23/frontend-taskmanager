import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grow } from '@material-ui/core'

import colors from '../colors/colors'
import DisplayBox from './ui/Display/DisplayBox'

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: '400px',
	},
	menuContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	menu: {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	box: {
		width: '45%',
		height: '90px',
		background: 'grey',
		display: 'flex',
		alignItems: 'flex-end',
		borderRadius: '8px',
		marginTop: theme.spacing(2),
	},
	optionsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
}))

const BackgroundColorsAndImages = ({ value, onChange }) => {
	const classes = useStyles()
	const [areImagesShown, setAreImagesShown] = useState(false)

	return (
		<>
			<div className={classes.menu}>
				<DisplayBox
					style={{
						backgroundImage:
							'url(https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
					onClick={() => setAreImagesShown(true)}
				/>
				<DisplayBox
					style={{
						backgroundImage:
							'url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
					onClick={() => {
						setAreImagesShown(false)
					}}
				/>
			</div>
			{areImagesShown ? (
				<Grow in={areImagesShown}>
					<div className={classes.optionsContainer}>
						{value.map((image) => (
							<DisplayBox
								key={image.urls.full}
								style={{
									backgroundImage: `url(${image.urls.full})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
								}}
								onClick={() => onChange(image.urls.full)}
							/>
						))}
					</div>
				</Grow>
			) : (
				<Grow in={!areImagesShown}>
					<div className={classes.optionsContainer}>
						{colors.map((color) => (
							<DisplayBox
								key={color}
								style={{
									background: color,
								}}
								onClick={() => onChange(color)}
							/>
						))}
					</div>
				</Grow>
			)}
		</>
	)
}

export default BackgroundColorsAndImages
