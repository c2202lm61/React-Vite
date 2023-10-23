import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
  import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../services/userService';
const ModalEditUser = (props)=>{
const {show,handleClose, dataUserEdit} = props;
const [name, setName] = useState("");
const [job, setJob] = useState("");
const handleEditUserFromModal = ()=>{

}
const handleEditUser= async ()=>{
let res = await putUpdateUser(name,job);
console.log((res))
if(res && res.updateAt){
handleEditUserFromModal({
	first_name: name,
	id:dataUserEdit.id
})
}
}
useEffect(()=>{
if(show){
	setName(dataUserEdit.first_name)
}
},[dataUserEdit])

return(
	<>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
		<Modal.Title>Edit User</Modal.Title>
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
          <Button variant="primary" onClick={handleEditUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)
}
export default  ModalEditUser;
