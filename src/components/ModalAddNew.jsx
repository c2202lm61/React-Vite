import { useState } from 'react';
import Button from 'react-bootstrap/Button';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {postCreateUser}  from "../services/userService"
import Modal from 'react-bootstrap/Modal';
const ModalAddNews = (props)=>{
const {show,handleClose, handleUpdateTable} = props;
const [name, setName] = useState("");
const [job, setJob] = useState("");
const handleSaveUser  = async()=>{
	let res = await postCreateUser(name,job);
console.log(res)
if(res && res.id){
handleClose();
setName("")

setJob("")
toast.success("A user is created succeed")
props.handleUpdateTable({first_name:name,id:res.id})
}else{
toast.error("an error")
}
}
return(
	<>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
		<Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
	<Modal.Body>
		<div className='body-add-new'>
			<form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>{
    	setName(e.target.value)
    }} id="exampl" value={name}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Job</label>
    <input type="text" className="form-control" id="exampleI1"
    onChange={(e)=>{setJob(e.target.value)}} value={job}/>
  </div>
</form>
		</div>
	</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}
export default  ModalAddNews;
