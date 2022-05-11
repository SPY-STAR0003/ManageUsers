import React, {useState} from "react";

export default function SampleModal() {
    const [showModal , setShowModal] = useState("d-flex")

    setTimeout(() => {
        setShowModal("d-none")
    },10000)

    return (
        <div className={`sampleModal ${showModal}`}>
            <span className={"closeBtn"} onClick={() => setShowModal("d-none")}> + </span>
            <p>
                به نظر میرسه هنوز اطلاعاتی رو ثبت نکردی !
                <br />
                اشکالی نداره! فقط کافیه روی دکمه روبرو کلیک کنی!
            </p>
        </div>
    )
}

