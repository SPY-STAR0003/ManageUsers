// =============== hooks ========================================
import {useState , useContext} from "react";
// =============== components ===================================
import InputForm from "./inputForm";
import RadioInputForm from "./radioInputForm";
// =============== contexts =====================================
import UsersContext from "../../context/usersContext";
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
    const usersContext = useContext(UsersContext);
    
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

        usersContext.dispatch({type : "changeUsersList" , payload : {userList : user}})
        setUserState({
            name : "",
            IDCode : "",
            email : "",
            accessRate: userState.accessRate,
        })
        usersContext.dispatch({type : "toggleForm"})
    }

    return (
        <div className={`addUsersForm ${usersContext.state.formClass}`}>
            <form className="form" onSubmit={formHandler}>
                <span className={"closeForm"} onClick={() => usersContext.dispatch({type : "toggleForm"})}> + </span>
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