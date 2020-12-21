import { toast, Slide } from 'react-toastify'

const colors = {
	success: '#569372',
	info: '#4F6AAA',
	warning: '#E79121',
	error: '#E34B4B'
}
const toastBody = type => ({
	position: toast.POSITION.TOP_RIGHT,
	transition: Slide,
	style: {
		background: colors[type],
		color: '#ffffff',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px #000000'
	}
})

export const showToast = (type, msg) => {
	switch (type) {
		case 'success':
			return toast.success(msg, toastBody(type))
		case 'info':
			return toast.info(msg, toastBody(type))
		case 'warning':
			return toast.warning(msg, toastBody(type))
		case 'error':
			return toast.error(msg, toastBody(type))
		default:
			break;
	}
}