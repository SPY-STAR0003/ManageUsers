
// ============ hooks ========================================
import {useState , useContext} from "react";
// ============ Components ===================================
import EditUser from "../form/editUser";
import ShowUserModal from "../modal/showUserModal";
import ConfirmModal from "../modal/confirmModal";
// ============ Contexts =====================================
import UsersContext from "../../context/usersContext";
// ============ libraries ====================================
import instance from "../../api/api";
import 'bootstrap-icons/font/bootstrap-icons.css';
import PN from "persian-number";
// ============ pictures =====================================
import userPicture from "../images/blank-profile-picture-973460__480.webp";

export default function MakeTableRows({user}) {
    // ============ state ====================================
    const [showUser , setShowUser] = useState(false);
    const [editState , setEditState] = useState(false);
    // ============ context ==================================
    const usersContext = useContext(UsersContext);
    // ============ Helper function for child components =====
    let toggleShowUser = () => {
        showUser
        ? setShowUser(false)
        : setShowUser(true)
    }

    let editHandler = async (editedUser) => {
        // eslint-disable-next-line
        let editUser = await instance.put(`/users/${editedUser.id}` , {
            name : editedUser.name,
            IDCode : editedUser.IDCode,
            date : editedUser.date,
            email : editedUser.email,
            accessRate : editedUser.accessRate,
            password : "",
        }) 
        usersContext.dispatch({type : "editUser" , payload : {user : editedUser}})
        setEditState(false);
    }

    return (
        <>
            {
                showUser
                ?   <ShowUserModal user={user} toggleShowModal={toggleShowUser}/>
                :   null
            }
            {
                // with click on edit btn user can change data (editState change to true !) 
                !editState
                ? (
                        <tr>
                            {/* toggleShowUser will show a modal with user information */}
                            <td onClick={() => toggleShowUser()}> <img src={userPicture} alt="user"/> </td>
                            <td onClick={() => toggleShowUser()}> {user.name} </td>
                            <td onClick={() => toggleShowUser()}> {PN.convertEnToPe(user.IDCode)} </td>
                            <td onClick={() => toggleShowUser()}> {user.email} </td>
                            <td onClick={() => toggleShowUser()}> {new Date().toLocaleDateString("fa")} </td>
                            <td onClick={() => toggleShowUser()}> {user.accessRate} </td>
                            <td>
                                <div className="icons">
                                    <i className="bi bi-pencil-square" onClick={() => setEditState(true)}></i>
                                    <i className="bi bi-trash3-fill" onClick={() => usersContext.dispatch({type : "deleteUser" , payload : {id : user.id}})}></i>
                                </div>
                            </td>
                        </tr>
                    )
                : <EditUser user={user} edit={editHandler} />
            }
            <ConfirmModal />
        </>
    )
}