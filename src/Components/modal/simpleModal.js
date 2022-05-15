import {useState} from "react";

export default function SimpleModal() {
    const [showModal , setShowModal] = useState("d-flex")

    return (
        <div className={`sampleModal ${showModal}`}>
            <div className={"sampleModalBody"}>
                <span className={"closeBtn"} onClick={() => setShowModal("d-none")}> + </span>
                <p>
                    به نظر میرسه هنوز اطلاعاتی رو ثبت نکردی !
                    <br />
                    اشکالی نداره! فقط کافیه روی دکمه + در پایین صفحه کلیک کنی!
                </p>
            </div>
        </div>
    )
}

