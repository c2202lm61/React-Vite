import axios from 'axios';
import {useEffect, useState} from 'react';
import  {fetchAllUser} from  "../services/userService";
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import ModalAddNews from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import handleEditUserFromModal from './ModalEditUser'
const TableUsers = (props)=>{
const [listUsers,setListUsers] = useState([]);
useEffect(()=>{
	getUsers(2);
},[])
const getUsers = async (page)=>{
let  res = await fetchAllUser(page);
if(res  && res.data){
setListUsers(res.data);
setTotalUsers(res.total);
setTotalPages(res.total_pages)
}
console.log("chekUser",res)
}
//console.log(listUsers);
const handlePageClick= (event)=>{
	getUsers(+event.selected+1)
}
const [totalPages,setTotalPages] = useState(0);
const [totalUsers,setTotalUsers] = useState(0);
const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
const [isShowModalEdit, setIsShowModalEdit] = useState(false);
const [dataUserEdit, setDataUserEdit] = useState({});
const handleClose= ()=>{
setIsShowModalAddNew(false);
setIsShowModalEdit(false);
}
const handleUpdateTable= (user)=>{
	setListUsers([user,...listUsers])
}
const handleEditUser = (user)=>{
setDataUserEdit(user);
setIsShowModalEdit(true);
//	console.log(user)
	}
	return(
<>
			<div className="my-3 d-flex justify-content-between">
					<span>List:User</span>
				
					<button onClick={()=>{
					setIsShowModalAddNew(true)
					}} className="btn btn-success">Add new User</button>
		</div>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
	  <th>Last Name</th>
	  <th>Actions</th>
        </tr>
      </thead>
      <tbody>
	      {listUsers && listUsers.length>0 &&
	      listUsers.map((item, index)=>(
		<tr  key={`users-${index}`}>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
	  <td>{item.last_name}</td>
	  <td>
		  <button className='btn btn-warning mx-3' onClick={()=>handleEditUser(item)}>Edit</button>
		  <button className='btn btn-danger'>Delete</button>
	  </td>
        </tr>

	      ))
	      }
              </tbody>
      </Table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
      previousLabel="< previous"

      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
      
	/>     
	<ModalAddNews
	show={isShowModalAddNew}
	handleClose={handleClose}
	handleUpdateTable={handleUpdateTable}	
/>
		<ModalEditUser
		show={isShowModalEdit}
		dataUserEdit={dataUserEdit}
		handleClose={handleClose}
		handleEditUserFromModal={handleEditUserFromModal}
	/>

</>)
}
export default TableUsers;
