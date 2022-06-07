// =========== React Hooks ======================================
import { useState } from "react";
// =========== Redux ============================================
import { useDispatch , useSelector } from "react-redux";
// =========== libraries & maked States =========================
import UseDarkMode from "../libraries/useDarkMode";
import { langEN , langFA } from "./../../store/slices/languageSlice";

export default function FeaturesBtn() {
    // eslint-disable-next-line
    const [theme , setTheme] = UseDarkMode(true)
    const [action , showAction] = useState("d-none");
    
    // this function will appear or disappear features Menu !
    const toggleAction = () => {
        action === "d-flex" 
        ? showAction("d-none")
        : showAction("d-flex")
    }
    // ============= Redux Functions ============================
    const dispatch = useDispatch();
    const values = useSelector(state => state.language.values)

    return (
        <div className={"featuresBtn addBtn"} 
            onClick = {() => toggleAction()}
            >
            <i className="bi bi-wrench-adjustable"></i>
            <div className={`actions ${action}`} onMouseLeave={() => toggleAction()}>
                <div className="actionItem">
                    {values.featuresBtnDarkModeTitle}
                    <div className="actionItemMenu actionDarkMode">
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => setTheme(true)}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            {values.featuresBtnDarkModeli1} 
                        </div>
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => setTheme(false)}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            {values.featuresBtnDarkModeli2} 
                        </div>
                    </div>
                </div>
                <div className="actionItem">
                    {values.featuresBtnLanguage}
                    <div className="actionItemMenu actionsLanguageBtn">
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => dispatch(langEN())}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            ENGLISH 
                        </div>
                        <div 
                            className="actionItemMenuItem"
                            onClick={() => dispatch(langFA())}
                            >
                            <i className="bi bi-arrow-left-circle-fill"></i>
                            فارسی 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}