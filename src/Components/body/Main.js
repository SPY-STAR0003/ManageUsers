import {useState} from "react";
import "../cssStyles/bundle.scss";
import AddUserForm from "../Form/AddUserForm";
import MakeTableRows from "../Table/MakeTableRows";
import TableHeader from "../Table/TableHeader";
import moment from "moment-jalaali";
import SimpleModal from "../Modal/SimpleModal";
import Header from "./Header";
import ConfirmModal from "../Modal/ConfirmModal";

function Main() {
    // ============ packages =================================
    // this package make numbersDate's view to persian view ...
    moment.loadPersian({usePersianDigits: true})

    // ============ states =====================================
    const [userState , setUserState] = useState({
        users : [],
    });
    const [formClass , setFormClass] = useState("d-none");
    // this state will appear modal & save user's code
    // because user's code will lose after modal appear!
    const [accessModal , setAccessModal] = useState({
        class : "d-none",
        access : false,
        userCode:"",
    });

    // ============= change States Functions =====================
    const toggleForm = () => {
        if (formClass === "d-none") {
            setFormClass("d-flex");
        } else {
            setFormClass("d-none");
        }
    }

    const toggleModal = ( modalClass , bool , userCode ) => {
        setAccessModal({
            class: modalClass,
            access: bool,
            userCode : userCode,
        })
    }

    const changeUsersList = userList => {
        setUserState(prevState => {
            return {
                users: [
                    {
                        code : Date.now(),
                        key : Date.now(),
                        name : userList.name,
                        IDCode : userList.IDCode,
                        email : userList.email,
                        accessRate : userList.accessRate,
                        date : moment().format('jYYYY/jM/jD'),
                    },
                    ...prevState.users,
                ]
            }
        })
    }

    const deleteUser = (userCode , access) => {
        // access is false by default ...
        // but Modal (confirmModal) can make it true!
        if (access) {
            let code = accessModal.userCode;
            // to disappear Modal we require toggle Modal
            toggleModal("d-none");
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
        // I added users from state to a new list !
        // then I remove last user and then add edited user !
        let usersList = userState.users;
        let filteredList = usersList.filter(item => item.code !== user.code);
        filteredList.push(user);

        setUserState({
            users: [...filteredList]
        })
    }

    return (
        <>
            {/*{ This is to show ConfirmModal after you want to delete
                access is False By default but Modal can change it!
            }*/}
            {
                accessModal.access
                ? <ConfirmModal modalClass={accessModal.class} del={true} toggleModal={toggleModal} deleteUser={deleteUser}  />
                : null
            }
            <Header />
            {
                userState.users.length !== 0
                ? (
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
                                        // simpleModal is for making UI better !
                                        : <SimpleModal />
                                }
                                </tbody>
                            </table>
                        </div>
                    )
                : <SimpleModal />
            }
            <AddUserForm hide={toggleForm} formClass={formClass} changeUsersList={changeUsersList} />
            {/*{ A button in left bottom side to add User :) }*/}
            <div className="addBtn" onClick={toggleForm}>
                <span> + </span>
            </div>
        </>
    )
}

export default Main;