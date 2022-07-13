// libraries
import PN from "persian-number";

// Redux
import { useSelector } from "react-redux"; 

// pictures
import exampleUserPicture from "./../../asset/images/blank-profile-picture-973460__480.webp";

export default function ShowUserModal({user , toggleShowModal}) {
    // Redux Functions
    const values = useSelector(state => state.language.values);
    const nationalityCode = useSelector(state => state.language.rtl) ? PN.convertEnToPe(user.IDCode) : user.IDCode

    return (
        <div className={"background showUserModalAnimation"}>
            <div className={"showUserModal"}>
                <h1> {values.showUserModalHeader + " - " + user.name} </h1>
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
                            <span className={"subject"}> {values.addNewUserSelect1} </span>
                            <span className={"value"}> {user.gender} </span>
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
                            <span className={"value valueInfo"}> {user.description} </span>
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