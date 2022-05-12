
import React, {useState} from "react";
import "../cssStyles/bundle.scss";
import AddUser from "../Form/AddUser";
import MakeTableRows from "../Table/MakeTableRows";
import TableHeader from "../Table/TableHeader";
import moment from "moment-jalaali";
import SampleModal from "../Modal/SampleModal";
import Header from "./Header";
import ConfirmModal from "../Modal/ConfirmModal";

function Main() {
    moment.loadPersian({usePersianDigits: true})

    const [classState , setClassState] = useState("d-none");
    const [accessModal , setAccessModal] = useState({
        class : "d-none",
        access : false,
        userCode:"",
    });

    const toggleForm = () => {
        if (classState === "d-none") {
            setClassState("d-flex");
        } else {
            setClassState("d-none");
        }
    }

    const toggleModal = ( modalClass , bool , userCode ) => {
        setAccessModal({
            class: modalClass,
            access: bool,
            userCode : userCode,
        })
    }



    const [userState , setUserState] = useState({
        users : [],
    })

    const changeUsersList = userList => {
        setUserState(prevState => {
            return {
                users: [
                    ...prevState.users,
                    {
                        code : Date.now(),
                        key : Date.now(),
                        name : userList.name,
                        IDCode : userList.IDCode,
                        email : userList.email,
                        accessRate : userList.accessRate,
                        date : moment().format('jYYYY/jM/jD'),
                    }
                ]
            }
        })
    }

    const deleteUser = (userCode , access) => {
        if (access) {
            let code = accessModal.userCode;
            toggleModal("d-none")
            setUserState(prevState => {
                return {
                    users: prevState.users.filter(user => user.code !== code)
                }
            },
            )
        } else {
            toggleModal("d-flex" , true , userCode);
        }
    }

    const editUser = (user) => {

        let usersList = userState.users;
        let filterdList = usersList.filter(item => item.code !== user.code);
        filterdList.push(user);

        setUserState({
            users: [...filterdList]
        })
    }

    return (
        <>
            {
                accessModal.access
                ? <ConfirmModal modalClass={accessModal.class} del={true} toggleModal={toggleModal} deleteUser={deleteUser}  />
                : null
            }
            <Header />
            <div className="tableBox">
                <table>
                    <TableHeader />
                    <tbody>
                    {
                        userState.users.length !== 0
                        ? (
                                userState.users.map(user => <MakeTableRows code={user.code}
                                                                           key={user.key}
                                                                           name={user.name}
                                                                           IDCode={user.IDCode}
                                                                           email={user.email}
                                                                           accessRate={user.accessRate}
                                                                           date={moment().format('jYYYY/jM/jD')}
                                                                           delete={deleteUser}
                                                                           edit={editUser}
                                />)
                            )
                        : <SampleModal />
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