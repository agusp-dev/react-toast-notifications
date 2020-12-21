import { showToast } from './utils/toast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function App() {

  return (
    <div className='d-inline-flex flex-column m-4'>
			<button 
				type='button' 
				className='btn btn-success'
				onClick={() => showToast('success', 'This is a Success Toast Notification')}
				>Success Toast
			</button>
			<button 
				type='button' 
				className='btn btn-info mt-2'
				onClick={() => showToast('info', 'This is a Info Toast Notification')}
				>Info Toast
			</button>
			<button 
				type='button' 
				className='btn btn-warning mt-2'
				onClick={() => showToast('warning', 'This is a Info Toast Notification')}
				>Warning Toast
			</button>
			<button 
				type='button' 
				className='btn btn-danger mt-2'
				onClick={() => showToast('error', 'This is a Info Toast Notification')}
				>Error Toast
			</button>
    </div>
  )
}

export default App;
