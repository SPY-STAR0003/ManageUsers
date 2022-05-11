
import React, {useState} from "react";

export default function ConfirmModal(type) {

    const [showModal , setShowModal] = useState("d-none");

    return (
        <div className={`confirmModal ${showModal}`}>
            <div className={"text"}>
                <p>
                    {
                        type
                        ? ("آیا از حذف این شخص اطمینان دارید ؟")
                        : ("آیا نسبت به تغییراتی که انجام دادید اطمینان دارید ؟")
                    }
                </p>
            </div>
            <div>
                <button className={"dangerBtn"}></button>
                <button className={"successBtn"}></button>
            </div>
        </div>
    )
}