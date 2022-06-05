// =============== hooks ========================================
import {useState } from "react";
// =============== components ===================================
import InputForm from "./inputForm";
import RadioInputForm from "./radioInputForm";
// =========== Redux ===========================================
import { useSelector , useDispatch } from "react-redux";
import { changeUsersList , toggleForm } from "./../../store/slices/usersSlice";
// =============== libraries ====================================
import instance from "../../api/api";


export default function AddUserForm() {
// =============== states =======================================
    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        email : "",
        accessRate : "",
    })
// =============== Redux Functions ==============================
    const dispatch = useDispatch();
    const formClass = useSelector(state => state.users.formClass)
    const values = useSelector(state => state.language.values)

    
// a receiver function that set form values to state ============
    const getInputsValue = (key, value) => setUserState({...userState, [key]: value})

    const formHandler = async (e) => {
        e.preventDefault();
        let user = {
            code : Date.now(),
            name : userState.name,
            IDCode : userState.IDCode,
            email : userState.email,
            accessRate : userState.accessRate,
            date : new Date().toLocaleDateString("fa"),
            password : ""
        }
        // eslint-disable-next-line
        let requestUser = await instance.post("/users" , user)

        dispatch(changeUsersList(user))
        setUserState({
            name : "",
            IDCode : "",
            email : "",
            accessRate: userState.accessRate,
        })
        dispatch(toggleForm())
    }

    return (
        <div className={`addUsersForm ${formClass}`}>
            <form className="form" onSubmit={formHandler}>
                <span className={"closeForm"} onClick={() => dispatch(toggleForm())}> + </span>
                <h3> {values.addNewUserMainHeader} </h3>
                <div className="inputs">
                    <div className="rightSide">
                        <InputForm label={values.addNewUserInput1} type={"text"} value={userState.name} name={"name"} onchangeFunction={(e) => getInputsValue('name', e.target.value)} />
                        <InputForm label={values.addNewUserInput2} type={"text"} value={userState.IDCode} name={"IDCode"} onchangeFunction={(e) => getInputsValue('IDCode', e.target.value)} />
                    </div>
                    <div className="leftSide">
                        <InputForm label={values.addNewUserInput3} type={"text"} value={userState.email} name={"email"} onchangeFunction={(e) => getInputsValue('email', e.target.value)} />
                        <RadioInputForm mainLabel={values.addNewUserInput4} label1={values.addNewUserInput5} label2={values.addNewUserInput6} name={"accessRate"} onchangeFunction={getInputsValue}/>
                    </div>
                </div>
                <button type="submit"> {values.addNewUserBtn} </button>
            </form>
        </div>
    )
}