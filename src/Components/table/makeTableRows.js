
import {useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditUser from "../form/editUser";
import PN from "persian-number";
import ShowUserModal from "../modal/showUserModal";
import userPicture from "../images/blank-profile-picture-973460__480.webp"

export default function MakeTableRows(prop) {

    const [showUser , setShowUser] = useState(false);
    const [editState , setEditState] = useState(false);

    let toggleShowUser = () => {
        showUser
        ? setShowUser(false)
        : setShowUser(true)
    }

    let editHandler = (user) => {
        prop.edit(user)
        setEditState(false);
    }

    return (
        <>
            {
                showUser
                ?   <ShowUserModal user={prop} toggleShowModal={toggleShowUser}/>
                :   null
            }
            {
                !editState
                ? (
                        <tr>
                            <td onClick={() => toggleShowUser()}> <img src={userPicture} alt="user"/> </td>
                            <td onClick={() => toggleShowUser()}> {prop.name} </td>
                            <td onClick={() => toggleShowUser()}> {PN.convertEnToPe(prop.IDCode)} </td>
                            <td onClick={() => toggleShowUser()}> {prop.email} </td>
                            <td onClick={() => toggleShowUser()}> {prop.date} </td>
                            <td onClick={() => toggleShowUser()}> {prop.accessRate} </td>
                            <td>
                                <div className="icons">
                                    <i className="bi bi-pencil-square" onClick={() => setEditState(true)}></i>
                                    <i className="bi bi-trash3-fill" onClick={() => prop.delete(prop.code , false)}></i>
                                </div>
                            </td>
                        </tr>
                    )
                : <EditUser user={prop} edit={editHandler} />
            }
        </>
    )
}