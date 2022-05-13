import {useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import userProfile from "../images/blank-profile-picture-973460__480.webp"

export default function EditUser(props) {

    let {user, edit} = props;
    let {code ,name , IDCode , email , date , accessRate} = user;

    const [userEdit , setUserEdit] = useState({
        code,name,IDCode,email,date,accessRate,
    })

    // if we change one of state's parameters, All them change!
    // so we receive key(name of parameter) & value(value's parameter)
    // then we use prevState & update state!
    const getInputsValue = (key , value) => setUserEdit({...userEdit , [key] : value})

    return (
        <>
            <tr>
                <td> <img src={userProfile} alt="profile"/> </td>
                <td> <input type="text" value={userEdit.name} onChange={(e) => getInputsValue("name" , e.target.value)}/> </td>
                <td> <input type="text" value={userEdit.IDCode} onChange={(e) => getInputsValue("IDCode" , e.target.value)}/> </td>
                <td> <input type="text" value={userEdit.email} onChange={(e) => getInputsValue("email" , e.target.value)}/> </td>
                <td> {userEdit.date} </td>
                <td> <input type="text" value={userEdit.accessRate} onChange={(e) => getInputsValue("accessRate" , e.target.value)}/> </td>
                <td>
                    <div className="icons" onClick={() => edit(userEdit)}>
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                </td>
            </tr>
        </>
    )
}