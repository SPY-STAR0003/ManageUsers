
import {useState , useContext} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditUser from "../form/editUser";
import PN from "persian-number";
import ShowUserModal from "../modal/showUserModal";
import userPicture from "../images/blank-profile-picture-973460__480.webp";
import UsersContext from "../../Context/usersContext";
import moment from "moment-jalaali";
import axios from "axios";

export default function MakeTableRows({user}) {
    // ============ packages =================================
    // this package make numbersDate's view to persian view ...
    moment.loadPersian({usePersianDigits: true})

    const [showUser , setShowUser] = useState(false);
    const [editState , setEditState] = useState(false);
    const usersContext = useContext(UsersContext);

    let toggleShowUser = () => {
        showUser
        ? setShowUser(false)
        : setShowUser(true)
    }

    let editHandler = async (editedUser) => {
        let editUser = await axios.put(`https://628cca310432524c58e5e052.endapi.io/users/${editedUser.id}` , {
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
                !editState
                ? (
                        <tr>
                            <td onClick={() => toggleShowUser()}> <img src={userPicture} alt="user"/> </td>
                            <td onClick={() => toggleShowUser()}> {user.name} </td>
                            <td onClick={() => toggleShowUser()}> {PN.convertEnToPe(user.IDCode)} </td>
                            <td onClick={() => toggleShowUser()}> {user.email} </td>
                            <td onClick={() => toggleShowUser()}> {moment().format('jYYYY/jM/jD')} </td>
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
        </>
    )
}