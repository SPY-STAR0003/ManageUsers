// =============== hooks =================================
import {useState} from "react";
import {useSelector} from "react-redux";

export default function SimpleModal() {
// =============== state =================================
    const [showModal , setShowModal] = useState("d-flex");
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

