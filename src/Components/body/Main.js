
import React, {useState} from "react";
import "../cssStyles/bundle.scss";
import AddUser from "../Form/AddUser";
import MakeTableRows from "../Table/MakeTableRows";
import TableHeader from "../Table/TableHeader";
import moment from "moment-jalaali";



import Header from "./Header";
function Main() {
    moment.loadPersian({usePersianDigits: true})

    const [classState , setClassState] = useState({
        class : "d-none",
    })

    const toggleForm = () => {
        if (classState.class === "d-none") {
            setClassState({class: "d-flex"})
        } else {
            setClassState({class: "d-none"})
        }
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
                        code : Date.now(),
                        key : Date.now(),
                        name : usersList.name,
                        IDCode : usersList.IDCode,
                        email : usersList.email,
                        accessRate : usersList.accessRate,
                        date : moment().format('jYYYY/jM/jD'),
                    }
                ]
            }
        })
    }

    const deleteUser = userCode => {
        setUserState(prevState => {
            return {
                users : prevState.users.filter(user => user.code !== userCode)
            }
        })
    }

    return (
        <>
            <Header />
            <div className="tableBox">
                <table>
                    <TableHeader />
                    <tbody>
                    {
                        userState.users.map(user => <MakeTableRows code={user.code}
                                                                   key={user.key}
                                                                   name={user.name}
                                                                   IDCode={user.IDCode}
                                                                   email={user.email}
                                                                   accessRate={user.accessRate}
                                                                   date={moment().format('jYYYY/jM/jD')}
                                                                   delete={deleteUser}
                        />)
                    }
                    </tbody>
                </table>
            </div>
            <AddUser hide={toggleForm} classState={classState} changeUsersList={changeUsersList} />
            <div className="addBtn" onClick={toggleForm}>
                <span> + </span>
            </div>
        </>
    )
}

export default Main;