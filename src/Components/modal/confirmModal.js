export default function ConfirmModal(props) {
    return (
        <div className={`background ${props.modalClass}`}>
            <div className={`confirmModal`}>
                <div className={"text"}>
                    <p>
                        {
                            props.del
                                ? ("آیا از حذف اطلاعات این شخص اطمینان دارید ؟")
                                : ("آیا نسبت به تغییراتی که انجام دادید اطمینان دارید ؟")
                        }
                    </p>
                </div>
                <div className={"buttons"}>
                    <button className={"dangerBtn"} onClick={() => props.deleteUser("", true)} > ! حذفش کن بره باو </button>
                    <button className={"successBtn"} onClick={() => props.toggleModal("d-none" , false)}> ! نه پشیمون شدم  </button>
                </div>
            </div>
        </div>
    )
}