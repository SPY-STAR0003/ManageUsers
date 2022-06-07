// =========== React hooks ===============================
import {useState} from "react";
// =========== Redux =====================================
import {useSelector} from "react-redux";

export default function SimpleModal() {
// =========== states ====================================
    const [showModal , setShowModal] = useState("d-flex");
// =========== Redux Functions ===========================
    const values = useSelector(state => state.language.values);
    return (
        <div className={`sampleModal ${showModal}`}>
            <div className={"sampleModalBody"}>
                <span className={"closeBtn"} onClick={() => setShowModal("d-none")}> + </span>
                <p>
                    {values.simpleModalParagraph1}
                    <br />
                    {values.simpleModalParagraph2}
                </p>
            </div>
        </div>
    )
}

