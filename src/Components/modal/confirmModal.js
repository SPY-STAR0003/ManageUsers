import {useContext} from "react";
import UsersContext from "../../Context/usersContext";

export default function ConfirmModal() {
    const usersContext = useContext(UsersContext)
    return (
        <div className={`background ${usersContext.modalClass}`}>
            <div className={`confirmModal`}>
                <div className={"text"}>
                    <p>
                        {
                            usersContext.del
                                ? ("آیا از حذف اطلاعات این شخص اطمینان دارید ؟")
                                : ("آیا نسبت به تغییراتی که انجام دادید اطمینان دارید ؟")
                        }
                    </p>
                </div>
                <div className={"buttons"}>
                    <button className={"dangerBtn"} onClick={() => usersContext.delete("", true)} > ! حذفش کن بره باو </button>
                    <button className={"successBtn"} onClick={() => usersContext.toggleModal("d-none" , false)}> ! نه پشیمون شدم  </button>
                </div>
            </div>
        </div>
    )
}