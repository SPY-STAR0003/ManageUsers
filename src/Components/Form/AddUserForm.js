import { useState } from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";

function AddUserForm({ changeUsersList, hide, formClass }) {
    const userInitialValue = {
        name: "",
        IDCode: "",
        email: "",
        accessRate: "ادمین",
    };

    const [userState, setUserState] = useState(userInitialValue)
    const [nameError, setNameError] = useState("");
    const [IDCodeError, setIDCodeError] = useState("");
    const [emailError, setEmailError] = useState("");

    const getInputsValue = (key, value) => setUserState({ ...userState, [key]: value })

    const resetState = () => {
        setUserState(userInitialValue)
        setNameError("");
        setIDCodeError("");
        setEmailError("");
    }

    const nameValidation = (name) => {
        if (name === "") {
            setNameError("وارد کردن نام الزامی است")
        } else {
            setNameError("")
        }
    }

    const IDCodeValidation = (IDCode) => {
        const regex = /^\d{10}$/;
        if (IDCode === "") {
            setIDCodeError("وارد کردن کد ملی الزامی است")
        } else if (!regex.test(IDCode)) {
            setIDCodeError("کد ملی وارد شده صحیح نمی باشد")
        } else {
            setIDCodeError("")
        }
    }

    const emailValidation = (email) => {
        const regex = /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;
        if (email === "") {
            setEmailError("وارد کردن ایمیل الزامی است")
        } else if (!regex.test(email)) {
            setEmailError("ایمیل وارد شده صحیح نمی باشد")
        } else {
            setEmailError("")
        }
    }

    const checkValidation = () => {
        nameValidation(userState.name);
        IDCodeValidation(userState.IDCode);
        emailValidation(userState.email);
    }

    const onChangeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        getInputsValue(key, value);
        if (key === "name") {
            nameValidation(value)
        } else if (key === "IDCode") {
            IDCodeValidation(value)
        }
        else if (key === "email") {
            emailValidation(value)
        }
    }

    const formHandler = (e) => {
        e.preventDefault();
        checkValidation();
        if ((nameError === "" && IDCodeError === "" && emailError === "") &&
            (userState.name !== "" && userState.IDCode !== "" && userState.email !== "")) {
            changeUsersList(userState);
            resetState();
            hide();
        }
    }

    return (
        <div className={`addUsersForm ${formClass}`}>
            <form className="form" onSubmit={formHandler}>
                <span className={"closeForm"} onClick={() => { resetState(); hide() }}> + </span>
                <h3> فرم ثبت نام اعضای جدید </h3>
                <div className="inputs">
                    <div className="rightSide">
                        <Input label={"نام و نام خانوادگی :"} type="text" value={userState.name} name={"name"} onchangeFunction={onChangeHandler} />
                        {nameError && <p className="error">{nameError}</p>}
                        <Input label={"کد ملی :"} type="text" value={userState.IDCode} name={"IDCode"} onchangeFunction={onChangeHandler} />
                        {IDCodeError && <p className="error">{IDCodeError}</p>}
                    </div>
                    <div className="leftSide">
                        <Input label={"ایمیل :"} type="text" value={userState.email} name={"email"} onchangeFunction={onChangeHandler} />
                        {emailError && <p className="error">{emailError}</p>}
                        <RadioInput mainLabel={"میزان دسترسی کاربر :"} label1={"ادمین"} label2={"عضوساده"} name={"accessRate"} onchangeFunction={getInputsValue} selected={userState.accessRate} />
                    </div>
                </div>
                <button type="submit"> اضافه کردن عضو جدید </button>
            </form>
        </div>
    )
}
export default AddUserForm;