
import React , {useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditUser from "../Form/EditUser";
import PN from "persian-number";

function MakeTableRows(prop) {

    const [editState , setEditState] = useState(false);

    let editHandler = (user) => {
        prop.edit(user)
        setEditState(false);
    }

    return (
        <>
            {
                !editState
                ? (
                        <tr>
                            <td> {prop.name} </td>
                            <td> {PN.convertEnToPe(prop.IDCode)} </td>
                            <td> {prop.email} </td>
                            <td> {prop.date} </td>
                            <td> {prop.accessRate} </td>
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


export default MakeTableRows;