import picture from "./../../images/blank-profile-picture-973460__480.webp";
import { useDispatch } from "react-redux";
import {deleteUser} from "../../../store/slices/usersSlice"
import ConfirmModal from "../../modal/confirmModal";

export default function ShowUsersInGridMode({user}) {

    const dispatch = useDispatch()

    return (
        <div className="gridModeItem">
            <div className="gridModeItemText">
                <p>
                    <span className="title">نام و نام خانوادگی :</span>
                    <span className="value">{user.name}</span> 
                </p>
                <p>
                    <span className="title">کدملی :</span>
                    <span className="value">{user.IDCode}</span> 
                </p>
                <p>
                    <span className="title">ایمیل :</span>
                    <span className="value">{user.email}</span>   
                </p>
                <p>
                    <span className="title">تاریخ عضویت :</span>
                    <span className="value">{user.date}</span>  
                </p>
                <p>
                    <span className="title">نوع دسترسی :</span>
                    <span className="value"> {user.accessRate} </span>
                </p>
            </div>
            <div className="gridModeItemImage">
                <img src={picture} />
            </div>
            <div className="editBtns">
                <div className="btns">
                    <button className="btn btn-primary"> ویرایش کاربر </button>
                    <button className="btn btn-warning" onClick={() => dispatch(deleteUser(user.id))}> حذف کاربر </button>
                </div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}