import "./App.scss"
import Header from "./components/Header";
import TableUsers from "./components/TableUser"
import ModalAddNews from "./components/ModalAddNew"
import { Container } from "react-bootstrap";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
function App() {

return (<>
	<div className="app-containner">
		<Header/>
			<Container>
	
		<TableUsers/>
	</Container>
</div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</>
  )
}

export default App
