import UseDarkMode from "../libraries/useDarkMode";
import { useState } from "react";

export default function FeaturesBtn() {

    const [theme , setTheme] = UseDarkMode(true)
    const [action , showAction] = useState("d-none");
    
    const toggleAction = () => {
        action === "d-flex" 
        ? showAction("d-none")
        : showAction("d-flex")
    }

    return (
        <div className={"featuresBtn addBtn"} 
            onClick = {() => toggleAction()}
            >
            <i className="bi bi-wrench-adjustable"></i>
            <div className={`actions ${action}`} onMouseLeave={() => toggleAction()}>
                <div className="actionItem">
                    حالت شب
                    <div className="actionItemMenu actionDarkMode">
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => setTheme(true)}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            فعال 
                        </div>
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => setTheme(false)}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            غیرفعال 
                        </div>
                    </div>
                </div>
                <div className="actionItem">
                    زبان برنامه
                    <div className="actionItemMenu actionsLanguageBtn">
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> ENGLISH </div>
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> فارسی </div>
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> Deutsch </div>
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> العربیه </div>
                    </div>
                </div>
                <div className="actionItem">
                    حالت نمایش مخاطبین
                    <div className="actionItemMenu actionsViewBtn">
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> حالت شبکه ای </div>
                        <div className="actionItemMenuItem"><i className="bi bi-arrow-left-circle-fill"></i> حالت عادی </div>
                    </div>
                </div>
            </div>
        </div>
    )
}