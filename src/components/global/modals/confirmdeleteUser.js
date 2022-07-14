// Redux
import { useSelector , useDispatch } from "react-redux";
import { deleteUser , toggleModal } from "../../../store/slices/usersSlice";

// API
import instance from "../../../api";

export default function ConfirmDeleteUser() {

    // Redux Functions
    let {modalClass , userCode} = useSelector(state => state.users);
    const values = useSelector(state => state.language.values);
    let dispatch = useDispatch();

    let deleteUserFromApi = async () => {
        await instance.delete(`/users/${userCode}`);
        dispatch(deleteUser())
    }

    return (
        <div className={`background ${modalClass}`}>
            <div className={`confirmModal`}>
                <div className={"text"}>
                    <p>{values.confirmModalParagraph}</p>
                </div>
                <div className={"buttons"}>
                    <button className={"dangerBtn"} onClick={() => deleteUserFromApi()} > {values.confirmModalBtn1} </button>
                    <button className={"successBtn"} onClick={() => dispatch(toggleModal(false))}> {values.confirmModalBtn2}  </button>
                </div>
            </div>
        </div>
    )
}