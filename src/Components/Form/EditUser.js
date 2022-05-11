import React , {useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function EditUser({user, edit}) {

    // console.log(user)

    const [userState , setUserState] = useState({
        name : user.name,
        IDCode : user.IDCode,
        email : user.email,
        date : user.date,
        accessRate : user.accessRate,
    })

    const getInputsValue = e => {
        if (e.target.dataset.name === "name") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    name : e.target.value
                }
            })
        } else if (e.target.dataset.name === "IDCode") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    IDCode : e.target.value
                }
            })
        } else if (e.target.dataset.name === "email") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    email : e.target.value
                }
            })
        } else if (e.target.dataset.name === "accessRate") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    accessRate : e.target.dataset.rate
                }
            })
        }
    }

    return (
        <>
            <tr>
                <td> <input type="text" value={userState.name} onChange={getInputsValue}/> </td>
                <td> <input type="text" value={userState.IDCode} onChange={getInputsValue}/> </td>
                <td> <input type="text" value={userState.email} onChange={getInputsValue}/> </td>
                <td> <input type="text" value={userState.date} onChange={getInputsValue}/> </td>
                <td> <input type="text" value={userState.accessRate} onChange={getInputsValue}/> </td>
                <td>
                    <div className="icons" onClick={() => edit(user)}>
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EditUser;