// =================== Redux ========================================
import { toggleForm } from "../../store/slices/usersSlice";
import { useDispatch } from "react-redux";

//  A button in left bottom side to add User ========================
export default function AddNewUserBtn() {

    const dispatch = useDispatch();

    return (
        <div className="addBtn"
         onClick={() => dispatch(toggleForm())}
         >
            <span> + </span>
        </div>
    )
}