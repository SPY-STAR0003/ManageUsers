// React
import { useState } from "react";
import PropTypes from "prop-types";

// Redux
import { useSelector } from "react-redux";

// Components
import InputForm from "../elements/inputForm";
import TextareaInput from "../elements/textareaInput";
import SelectInput from "../elements/selectInput";

// static files
import picture from "../../../asset/images/blank-profile-picture-973460__480.webp";

const EditModal = ({user , edit , setEditState}) => {

    let {code ,name , IDCode , gender , email , date , accessRate , description , id} = user;

    const [editedUser , setEditedUser] = useState({
        code ,name , IDCode , gender , email , date , accessRate , description , id
    });

    const editHandler = (key , value) => setEditedUser({ ...editedUser , [key] : value});

    const values = useSelector(state => state.language.values)

    return (
        <div className="addEditModal">
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
                <h2> {values.editUserMainHeader + " - " + user.name} </h2>
                <InputForm specialClass={"leftAway"}
                    width={"80%"} 
                    label={values.addNewUserInput1} 
                    type={"text"} 
                    value={editedUser.name} 
                    name={"name"} 
                    changer={(e) => editHandler('name', e.target.value)} 
                />
                <div className="groupInputs">
                    <InputForm width={"68%"} 
                        label={values.addNewUserInput2} 
                        type={"text"} 
                        value={editedUser.IDCode} 
                        name={"IDCode"} 
                        changer={(e) => editHandler('IDCode', e.target.value)}  
                    />
                    <SelectInput width={"31%"}
                        mainLabel={values.addNewUserSelect1} 
                        labels={ [values.addNewUserSelect2 , values.addNewUserSelect3] }   
                        name={"gender"}
                        changer={editHandler}   
                    />
                </div>
                <div className="groupInputs">
                    <InputForm width={"68%"} 
                        label={values.addNewUserInput3} 
                        type={"text"} 
                        value={editedUser.email} 
                        name={"email"} 
                        changer={(e) => editHandler('email', e.target.value)}  
                    />
                    <SelectInput width={"31%"}
                        mainLabel={values.addNewUserSelect4} 
                        labels ={[values.addNewUserSelect5 , values.addNewUserSelect6 , values.addNewUserSelect7 , values.addNewUserSelect8]} 
                        name={"accessRate"}
                        changer={editHandler}   
                    />
                </div>
                <TextareaInput 
                    name = {"description"} 
                    label={values.addNewUserTextarea}
                    value={editedUser.description}
                    status={values.addNewUserTextareaStatus}
                    changer={editHandler}
                />
                <i className="bi bi-check-circle-fill" onClick={() => edit(editedUser)}></i>
                <i className="bi bi-x-circle-fill" onClick={() => setEditState(false)}></i>
            </div>
        </div>
    )
}

EditModal.propTypes = {
    user : PropTypes.object ,
    edit : PropTypes.func ,
    setEditState : PropTypes.func
}

export default EditModal;