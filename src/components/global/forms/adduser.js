// hooks
import {useState } from "react";

// components
import InputForm from "../elements/inputForm";
import SelectInput from "../elements/selectInput";
import TextareaInput from "../elements/textareaInput";
import instance from "../../../api";

// Redux
import { useSelector , useDispatch } from "react-redux";
import { changeUsersList , toggleForm } from "../../../store/slices/usersSlice";

// Media
import picture from "../../../asset/images/blank-profile-picture-973460__480.webp";

export default function AddUserForm() {

    // states
    const [userState , setUserState] = useState({
        name : "",
        IDCode : "",
        gender : "",
        email : "",
        accessRate : "",
        description : "",
    })

    // Redux Functions
    const dispatch = useDispatch();
    const formClass = useSelector(state => state.users.formClass)
    const values = useSelector(state => state.language.values)

    // a receiver function that set form values to state
    const getInputsValue = (key, value) => setUserState({...userState, [key]: value})

    const formHandler = async (e) => {
        e.preventDefault();
        let user = {
            code : Date.now(),
            name : userState.name,
            IDCode : userState.IDCode,
            gender : userState.gender,
            email : userState.email,
            accessRate : userState.accessRate,
            description : userState.description,
            date : new Date().toLocaleDateString("fa"),
        }

        // eslint-disable-next-line
        let requestUser = await instance.post("/users" , user)
        // render project again to add new User !
        dispatch(changeUsersList(user))
        setUserState({
            name : "",
            IDCode : "",
            gender : "",
            email : "",
            accessRate: "",
            description : ""
        })
        // close addNewUserForm ...!
        dispatch(toggleForm())
    }

    return (
        <div className={`addEditModal ${formClass}`}>
            <div className="addEditModalForm">
                <div className="imageDiv">
                    <div className="imageDivBox">
                        <img src={picture} alt="Profile" />
                        <div className="shadowImage">
                            <i className="bi bi-camera2"></i>
                            <div className="shadowImageText"> {values.addNewUserUploadPicture} </div>
                        </div>
                    </div>
                </div>
                <h2> {values.addNewUserMainHeader} </h2>
                <InputForm specialClass={"leftAway"}
                    width={"80%"} 
                    label={values.addNewUserInput1} 
                    type={"text"} 
                    value={userState.name} 
                    name={"name"} 
                    changer={(e) => getInputsValue('name', e.target.value)} 
                />
                <div className="groupInputs">
                    <InputForm width={"68%"} 
                        label={values.addNewUserInput2} 
                        type={"text"} 
                        value={userState.IDCode} 
                        name={"IDCode"} 
                        changer={(e) => getInputsValue('IDCode', e.target.value)}  
                    />
                    <SelectInput width={"31%"}
                        mainLabel={values.addNewUserSelect1} 
                        labels={ [values.addNewUserSelect2 , values.addNewUserSelect3] }   
                        name={"gender"}
                        changer={getInputsValue}   
                    />
                </div>
                <div className="groupInputs">
                    <InputForm width={"68%"} 
                        label={values.addNewUserInput3} 
                        type={"text"} 
                        value={userState.email} 
                        name={"email"} 
                        changer={(e) => getInputsValue('email', e.target.value)}  
                    />
                    <SelectInput width={"31%"}
                        mainLabel={values.addNewUserSelect4} 
                        labels ={[values.addNewUserSelect5 , values.addNewUserSelect6 , values.addNewUserSelect7 , values.addNewUserSelect8]} 
                        name={"accessRate"}
                        changer={getInputsValue}   
                    />
                </div>
                <TextareaInput
                    name = {"description"} 
                    label={values.addNewUserTextarea}
                    value={userState.description}
                    status={values.addNewUserTextareaStatus}
                    changer={getInputsValue}
                />
                <i className="bi bi-check-circle-fill" onClick={e => formHandler(e)}></i>
                <i className="bi bi-x-circle-fill" onClick={() => dispatch(toggleForm())}></i>
            </div>
        </div>
    )
}