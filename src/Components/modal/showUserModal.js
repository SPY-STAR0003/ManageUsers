// ============= libraries =========================================
import PN from "persian-number";

import { useSelector } from "react-redux"; 
// ============= pictures ==========================================
import exampleUserPicture from "../images/blank-profile-picture-973460__480.webp";

export default function ShowUserModal(props) {

    let {user , toggleShowModal} = props;

    const values = useSelector(state => state.language.values);
    const nationalityCode = useSelector(state => state.language.rtl) ? PN.convertEnToPe(user.IDCode) : user.IDCode

    return (
        <div className={"background showUserModalAnimation"}>
            <div className={"showUserModal"}>
                <h1> {values.showUserModalHeader + user.name} </h1>
                <div className="showUserInfo">
                    <div className="text">
                        <p>
                            <span className={"subject"}> {values.showUserModalParagraph1} </span>
                            <span className={"value"}> {user.name} </span>
                        </p>
                        <p>
                            <span className={"subject"}> {values.showUserModalParagraph2} </span>
                            <span className={"value"}> {nationalityCode} </span>
                        </p>
                        <p>
                            <span className={"subject"}> {values.showUserModalParagraph3} </span>
                            <span className={"value"}> {user.email} </span>
                        </p>
                        <p>
                            <span className={"subject"}> {values.showUserModalParagraph4} </span>
                            <span className={"value"}> {user.accessRate} </span>
                        </p>
                        <p>
                            <span className={"subject"}> {values.showUserModalParagraph5} </span>
                            <span className={"value valueInfo"}> {values.showUserModalParagraph6} </span>
                        </p>
                    </div>
                    <div className={"userProfileImage"}>
                        <img src={exampleUserPicture} alt="ProfileImage"/>
                    </div>
                </div>
                <div className={"closeShowUserModal"}  >
                    <button className={"dodgerBorderBtn"} onClick={toggleShowModal}> {values.showUserModalCloseBtn} </button>
                </div>
            </div>
        </div>
    )
}