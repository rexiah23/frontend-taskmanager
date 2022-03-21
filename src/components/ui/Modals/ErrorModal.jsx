import React, { Fragment, memo } from 'react'
import './ErrorModal.css'

const ErrorModal = memo(({ onClose, children }) => {
	return (
		<Fragment>
			<div className="backdrop" onClick={onClose} />
			<div className="error-modal">
				<h2>An Error Occurred!</h2>
				<p>{children}</p>
				<div className="error-modal__actions">
					<button type="button" onClick={onClose}>
						Okay
					</button>
				</div>
			</div>
		</Fragment>
	)
})

export default ErrorModal
