
import {useState , useContext} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditUser from "../form/editUser";
import PN from "persian-number";
import ShowUserModal from "../modal/showUserModal";
import userPicture from "../images/blank-profile-picture-973460__480.webp";
import UsersContext from "../../Context/usersContext";
import moment from "moment-jalaali";

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

    let editHandler = (user) => {
        usersContext.edit(user)
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
                                    <i className="bi bi-trash3-fill" onClick={() => usersContext.delete(user.code , false)}></i>
                                </div>
                            </td>
                        </tr>
                    )
                : <EditUser user={user} edit={editHandler} />
            }
        </>
    )
}