import  {useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function EditUser(props) {

    let {user, edit} = props;
    let {code ,name , IDCode , email , date , accessRate} = user;

    const [userEdit , setUserEdit] = useState({
        code,
        name,
        IDCode,
        email,
        date,
        accessRate,
    })

    // if we change one of state's parameters, All them change!
    // so first, we use datasets to find changed parameter!
    // then we use prevState & update state!
    const getInputsValue = e => {
        if (e.target.dataset.name === "name") {
            setUserEdit(prevState => {
                return {
                    ...prevState,
                    name : e.target.value
                }
            })
        } else if (e.target.dataset.name === "IDCode") {
            setUserEdit(prevState => {
                return {
                    ...prevState,
                    IDCode : e.target.value
                }
            })
        } else if (e.target.dataset.name === "email") {
            setUserEdit(prevState => {
                return {
                    ...prevState,
                    email : e.target.value
                }
            })
        } else if (e.target.dataset.name === "accessRate") {
            setUserEdit(prevState => {
                return {
                    ...prevState,
                    accessRate : e.target.value
                }
            })
        }
    }

    return (
        <>
            <tr>
                <td> <input type="text" onChange={getInputsValue} data-name={"name"}/> </td>
                <td> <input type="text" value={userEdit.IDCode} onChange={getInputsValue} data-name={"IDCode"}/> </td>
                <td> <input type="text" value={userEdit.email} onChange={getInputsValue} data-name={"email"}/> </td>
                <td> {userEdit.date} </td>
                <td> <input type="text" value={userEdit.accessRate} onChange={getInputsValue} data-name={"accessRate"}/> </td>
                <td>
                    <div className="icons" onClick={() => edit(userEdit)}>
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EditUser;