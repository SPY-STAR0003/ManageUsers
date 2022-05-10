
import React, {useState} from "react";
import "./style/bundle.scss";
import AddUser from "./AddUser";

import Header from "./Header";
function Main() {

    const [classState , setClassState] = useState({
        class : "d-none",
    })

    const showForm = () => {
        setClassState({
            class : "d-flex",
        })
    }

    const hideForm = () => {
        setClassState({
            class: "d-none",
        })
    }

    const [userState , setUserState] = useState({
        users : [],
    })

    const changeUsersList = usersList => {
        setUserState(prevState => {
            return {
                users: [
                    ...prevState.users,
                    {
                        key : Date.now(),
                        name : usersList.name,
                        IDCode : usersList.IDCode,
                        email : usersList.email,
                        date : usersList.date,
                        education : usersList.education
                    }
                ]
            }
        })
    }




    return (
        <>
            <Header />
            <div className="tableBox">
                <table>
                    <thead>
                        <tr>
                            <th>نام و نام خانوادگی </th>
                            <th> کد ملی </th>
                            <th> پست الکترونیکی </th>
                            <th> نوع عضویت </th>
                            <th> دسترسی ها </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <AddUser hide={hideForm} classState={classState} changeUsersList={changeUsersList} />
            <div className="addBtn" onClick={showForm}>
                <span> + </span>
            </div>
        </>
    )
}

export default Main;