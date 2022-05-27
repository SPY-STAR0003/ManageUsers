// ================ contexts ====================================
import {useContext} from "react";
import UsersContext from "../../context/usersContext";

export default function ConfirmModal() {
// ================ get context values ==========================
    let { modalClass , accessToSimpleModal } = useContext(UsersContext).state
    let { dispatch } = useContext(UsersContext)
    // This is to show ConfirmModal after you want to delete
    // access is False By default but modal can change it!
    return (
        <>
            {
                accessToSimpleModal
                    ?           
                    <div className={`background ${modalClass}`}>
                        <div className={`confirmModal`}>
                            <div className={"text"}>
                                <p>آیا از حذف اطلاعات این شخص اطمینان دارید ؟</p>
                            </div>
                            <div className={"buttons"}>
                                <button className={"dangerBtn"} onClick={() => dispatch({type : "deleteUser"})} > ! حذفش کن بره باو </button>
                                <button className={"successBtn"} onClick={() => dispatch({type : "toggleModal" , payload : {bool : false}})}> ! نه پشیمون شدم  </button>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}