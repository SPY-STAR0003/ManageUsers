import picture from "./../../images/blank-profile-picture-973460__480.webp";
import { useState } from "react"; 
import { useDispatch , useSelector } from "react-redux";
import {deleteUser , editUser} from "../../../store/slices/usersSlice"
import EditModal from "../../modal/editModal";
import instance from "../../../api/api";

export default function ShowUsersInGridMode({user}) {

    const [showEditModal , setShowEditModal] = useState(false)
    const dispatch = useDispatch()
    const values = useSelector(state => state.language.values)

    let editHandler = async (editedUser) => {
        // eslint-disable-next-line
        let sendEditedUser = await instance.put(`/users/${editedUser.id}` , {
            name : editedUser.name,
            IDCode : editedUser.IDCode,
            gender : editedUser.gender,
            date : editedUser.date,
            email : editedUser.email,
            accessRate : editedUser.accessRate,
            password : "",
        }) 
        dispatch(editUser(editedUser))
        setShowEditModal(false);
    }
    return (
        <>
            {
                showEditModal
                ? <EditModal user={user} edit={editHandler} setEditState={setShowEditModal} />
                : null
            }
            <div className="gridModeItem">
                <div className="gridModeItemText">
                    <p>
                        <span className="title">{values.addNewUserInput1}</span>
                        <span className="value">{user.name}</span> 
                    </p>
                    <p>
                        <span className="title">{values.addNewUserInput2}</span>
                        <span className="value">{user.IDCode}</span> 
                    </p>
                    <p>
                        <span className="title">{values.addNewUserSelect1}</span>
                        <span className="value">{user.gender}</span> 
                    </p>
                    <p>
                        <span className="title">{values.addNewUserInput3}</span>
                        <span className="value">{user.email}</span>   
                    </p>
                    <p>
                        <span className="title">{values.tableTh6 + " :"}</span>
                        <span className="value">{user.date}</span>  
                    </p>
                    <p>
                        <span className="title">{values.tableTh7 + " :"}</span>
                        <span className="value"> {user.accessRate} </span>
                    </p>
                </div>
                <div className="gridModeItemImage">
                    <img src={picture} />
                </div>
                <div className="editBtns">
                    <div className="btns">
                        <button className="btn btn-primary" onClick={() => setShowEditModal(true)}> {values.gridModeEditBtn} </button>
                        <button className="btn btn-warning" onClick={() => dispatch(deleteUser(user.id))}> {values.gridModeDeleteBtn} </button>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        </>
    )
}