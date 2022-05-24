import {useState , useContext} from "react";
import InputForm from "./inputForm";
import RadioInputForm from "./radioInputForm";
import UsersContext from "../../Context/usersContext";
import axios from "axios";
import moment from "moment-jalaali";

function AddUserForm() {

    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        email : "",
        accessRate : "",
    })

    const usersContext = useContext(UsersContext);

    // if we change one of state's parameters, All them change!
    // so first we use datasets to find changed parameter!
    // then we use prevState & update state!
    const getInputsValue = (key, value) => setUserState({...userState, [key]: value})

    const formHandler = async (e) => {
        e.preventDefault();
        let user = {
            code : Date.now(),
            name : userState.name,
            IDCode : userState.IDCode,
            email : userState.email,
            accessRate : userState.accessRate,
            date : moment().format('jYYYY/jM/jD'),
            password : ""
        }
        let requestUser = await axios.post("https://628cca310432524c58e5e052.endapi.io/users" , user)

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
        <div className={`addUsersForm ${usersContext.formClass}`}>
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

export default AddUserForm;