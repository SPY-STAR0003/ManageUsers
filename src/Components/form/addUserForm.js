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
// =============== Contexts =====================================
    const dispatch = useDispatch();
    const formClass = useSelector(state => state.users.formClass)
    
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
                <h3> فرم ثبت نام اعضای جدید </h3>
                <div className="inputs">
                    <div className="rightSide">
                        <InputForm label={"نام و نام خانوادگی :"} type={"text"} value={userState.name} name={"name"} onchangeFunction={(e) => getInputsValue('name', e.target.value)} />
                        <InputForm label={"کد ملی :"} type={"text"} value={userState.IDCode} name={"IDCode"} onchangeFunction={(e) => getInputsValue('IDCode', e.target.value)} />
                    </div>
                    <div className="leftSide">
                        <InputForm label={"ایمیل :"} type={"text"} value={userState.email} name={"email"} onchangeFunction={(e) => getInputsValue('email', e.target.value)} />
                        <RadioInputForm mainLabel={"میزان دسترسی کاربر :"} label1={"ادمین"} label2={"عضوساده"} name={"accessRate"} onchangeFunction={getInputsValue}/>
                    </div>
                </div>
                <button type="submit"> اضافه کردن عضو جدید </button>
            </form>
        </div>
    )
}