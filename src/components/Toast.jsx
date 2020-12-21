import React from 'react'
import { useToasts } from 'react-toast-notifications'

const Toast = ({ type, msg }) => {
	console.log('aaaaaasss')
	const { addToast } = useToasts()
	addToast(msg, {
		appearance: type,
		autoDismiss: true
	})
	return null
}

export { Toast }