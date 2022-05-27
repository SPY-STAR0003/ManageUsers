// import hooks ======================================
import { useContext } from "react";
// import contexts ===================================
import UsersContext from "../../context/usersContext";

// ==== A button in left bottom side to add User =====
export default function AddNewUserBtn() {

    const usersContext = useContext(UsersContext)

    return (
        <div className="addBtn" onClick={() => usersContext.dispatch({type : "toggleForm"})}>
            <span> + </span>
        </div>
    )
}