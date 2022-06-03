// =========== Redux ===========================================
import { useSelector , useDispatch } from "react-redux";
import { deleteUser , toggleModal } from "./../../store/slices/usersSlice";
// =========== API =============================================
import instance from "../../api/api";

export default function ConfirmModal() {

// ================ Redux Functions =============================
    let {modalClass , accessToSimpleModal , userCode} = useSelector(state => state.users);
    let dispatch = useDispatch();

    let deleteUserFromApi = async () => {
        let deleteUserRequest = await instance.delete(`/users/${userCode}`);
        dispatch(deleteUser())
    }

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
                                <button className={"dangerBtn"} onClick={() => deleteUserFromApi()} > ! حذفش کن بره باو </button>
                                <button className={"successBtn"} onClick={() => dispatch(toggleModal(false))}> ! نه پشیمون شدم  </button>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}