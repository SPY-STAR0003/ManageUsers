
import React, {useState} from "react";

function AddBtn() {
    const [classState , setClassState] = useState({
        formClass : "d-none",
    })

    const showForm = (e) => {
      setClassState(prevState => {
          return {
              formClass: "d-flex",
          }
      })
    }

    const hideForm = (e) => {
        setClassState(prevState => {
            return {
                formClass: "d-none",
            }
        })
    }

    return (
        <>
            <div className={`addUsersForm ${classState.formClass}`}>
                <div className="form">
                    <span className={"closeForm"} onClick={hideForm}> + </span>
                    <h3> فرم ثبت نام اعضای جدید </h3>
                    <div className="inputs">
                        <div className="rightSide">
                            <label htmlFor="familyName">نام ونام خانوادگی :</label>
                            <input type="text" id="familyName"/>
                            <label htmlFor="IDCode">کد ملی :</label>
                            <input type="text" id="IDCode"/>
                            <label htmlFor="email">پست الکترونیکی :</label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="leftSide">
                            <label htmlFor="date">تاریخ عضویت :</label>
                            <input type="text" id="date"/>
                            <label htmlFor="education">سطح تحصیلات :</label>
                            <input type="text" id="education"/>
                            <label> سمت عضو جدید </label>
                            <div className="radio-inputs">
                                <label className="accessRate">
                                    ادمین
                                    <input type="radio" name="accessRate"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="accessRate">
                                    عضو ساده
                                    <input type="radio" name="accessRate" checked="checked"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button> اضافه کردن عضو جدید </button>
                </div>
            </div>
            <div className="addBtn" onClick={showForm}>
                <span> + </span>
            </div>
        </>

    )
}

export default AddBtn;