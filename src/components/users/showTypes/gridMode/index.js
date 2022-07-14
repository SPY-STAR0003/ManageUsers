// React
import { useState } from "react"; 

// Components
import EditModal from "../../../global/modals/editModal";

// Redux
import { useDispatch , useSelector } from "react-redux";
import {deleteUser , editUser} from "../../../../store/slices/usersSlice"

// API
import instance from "../../../../api";

// Media
import picture from "../../../../asset/images/blank-profile-picture-973460__480.webp";

export default function ShowUsersInGridMode({user}) {
    // states
    const [showEditModal , setShowEditModal] = useState(false)

    // Redux Functions
    const dispatch = useDispatch()
    const values = useSelector(state => state.language.values)

    let editHandler = async (editedUser) => {
        await instance.put(`/users/${editedUser.id}` , editedUser) 
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
                    <img src={picture} alt="import profile" />
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