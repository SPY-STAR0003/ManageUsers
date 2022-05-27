// ============= libraries =========================================
import PN from "persian-number";
// ============= pictures ==========================================
import exampleUserPicture from "../images/blank-profile-picture-973460__480.webp";

export default function ShowUserModal(props) {

    let {user , toggleShowModal} = props;

    return (
        <div className={"background showUserModalAnimation"}>
            <div className={"showUserModal"}>
                <h1> مشخصات کاربر {user.name} </h1>
                <div className="showUserInfo">
                    <div className="text">
                        <p>
                            <span className={"subject"}> نام و نام خانوادگی : </span>
                            <span className={"value"}> {user.name} </span>
                        </p>
                        <p>
                            <span className={"subject"}> کد ملی : </span>
                            <span className={"value"}> {PN.convertEnToPe(user.IDCode)} </span>
                        </p>
                        <p>
                            <span className={"subject"}> پست الکترونیکی : </span>
                            <span className={"value"}> {user.email} </span>
                        </p>
                        <p>
                            <span className={"subject"}> میزان دسترسی کاربر : </span>
                            <span className={"value"}> {user.accessRate} </span>
                        </p>
                        <p>
                            <span className={"subject"}> درباره کاربر : </span>
                            <span className={"value valueInfo"}> هنوز اطلاعاتی وارد نشده است ... </span>
                        </p>
                    </div>
                    <div className={"userProfileImage"}>
                        <img src={exampleUserPicture} alt="ProfileImage"/>
                    </div>
                </div>
                <div className={"closeShowUserModal"}  >
                    <button className={"dodgerBorderBtn"} onClick={toggleShowModal}> این پنجره را ببند </button>
                </div>
            </div>
        </div>
    )
}