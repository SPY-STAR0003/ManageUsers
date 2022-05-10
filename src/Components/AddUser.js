
import React , {useState} from "react";


function AddUser(props) {

    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        email : "",
        date : "",
        education : "",
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
        } else if (e.target.dataset.name === "date") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    date : e.target.value
                }
            })
        } else if (e.target.dataset.name === "education") {
            setUserState(prevState => {
                return {
                    ...prevState,
                    education : e.target.value
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
                date : "",
                education : "",
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
                        <label htmlFor="familyName">نام ونام خانوادگی :</label>
                        <input type="text" id="familyName" value={userState.name} onChange={getInputsValue} data-name="name"/>
                        <label htmlFor="IDCode">کد ملی :</label>
                        <input type="text" id="IDCode" value={userState.IDCode} onChange={getInputsValue} data-name="IDcode"/>
                        <label htmlFor="email">پست الکترونیکی :</label>
                        <input type="text" id="email" value={userState.email} onChange={getInputsValue} data-name="email"/>
                    </div>
                    <div className="leftSide">
                        <label htmlFor="date">تاریخ عضویت :</label>
                        <input type="text" id="date" value={userState.date} onChange={getInputsValue} data-name="date"/>
                        <label htmlFor="education">سطح تحصیلات :</label>
                        <input type="text" id="education" value={userState.education} onChange={getInputsValue} data-name="education"/>
                        <label> سمت عضو جدید :</label>
                        <div className="radio-inputs">
                            <label className="accessRate">
                                ادمین
                                <input type="radio" name="accessRate"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="accessRate">
                                عضو ساده
                                <input type="radio" name="accessRate"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit"> اضافه کردن عضو جدید </button>
            </form>
        </div>
    )
}

export default AddUser;