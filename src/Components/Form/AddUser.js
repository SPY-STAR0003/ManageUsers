
import React , {useState} from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";


function AddUser(props) {

    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        email : "",
        accessRate : "",
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
        } else if (e.target.dataset.name === "accessRate-1") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    accessRate : e.target.dataset.rate
                }
            })
        } else if (e.target.dataset.name === "accessRate-2") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    accessRate : e.target.dataset.rate
                }
            })
        }
    }


    const formHandler = e => {
        e.preventDefault();
        props.changeUsersList(userState)
        setUserState(prevState => {
            return {
                name : "",
                IDCode : "",
                email : "",
                accessRate: "",
            }
        })
        props.hide()
    }

    return (
        <div className={`addUsersForm ${props.classState.class}`}>
            <form className="form" onSubmit={formHandler}>
                <span className={"closeForm"} onClick={props.hide}> + </span>
                <h3> فرم ثبت نام اعضای جدید </h3>
                <div className="inputs">
                    <div className="rightSide">
                        <Input label={"نام و نام خانوادگی :"} type={"text"} value={userState.name}  name={"name"} onchangeFunction={getInputsValue}/>
                        <Input label={"کد ملی :"} type={"text"} value={userState.IDCode}  name={"IDCode"} onchangeFunction={getInputsValue}/>
                    </div>
                    <div className="leftSide">
                        <Input label={"ایمیل :"} type={"text"} value={userState.email}  name={"email"} onchangeFunction={getInputsValue}/>
                        <RadioInput mainLabel={"میزان دسترسی کاربر :"} label1={"ادمین"} label2={"عضوساده"} name={"accessRate"} onchangeFunction={getInputsValue}/>
                    </div>
                </div>
                <button type="submit"> اضافه کردن عضو جدید </button>
            </form>
        </div>
    )
}

export default AddUser;