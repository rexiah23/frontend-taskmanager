import { useState, useContext } from 'react'

import TopBar from './ui/Navigation/TopBar'
import SideDrawer from './ui/Navigation/SideDrawer'
import BackgroundColorsAndImages from './BackgroundColorsAndImages'
import { ColorsAndImagesContext } from '../providers/ColorsAndImagesContext'

const Navigation = () => {
	const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
	const { imageUrls, updateSelectedBackground } = useContext(
		ColorsAndImagesContext
	)
	return (
		<div>
			<TopBar onToggle={setIsSideDrawerOpen} />
			<SideDrawer isOpen={isSideDrawerOpen} onToggle={setIsSideDrawerOpen}>
				<BackgroundColorsAndImages
					value={imageUrls}
					onChange={updateSelectedBackground}
				/>
			</SideDrawer>
		</div>
	)
}

export default Navigation
