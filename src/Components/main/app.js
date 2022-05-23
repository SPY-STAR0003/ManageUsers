import React, {useState , useEffect} from "react";
import "../cssStyles/bundle.scss";
import AddUserForm from "../form/addUserForm";
import MakeTableRows from "../table/makeTableRows";
import TableHeader from "../table/tableHeader";
import moment from "moment-jalaali";
import SimpleModal from "../modal/simpleModal";
import HeaderProject from "./headerProject";
import ConfirmModal from "../modal/confirmModal";
import UsersContext from "../../Context/usersContext";

export default function App() {
    // ============ states =====================================
    const [userState , setUserState] = useState({users : 'usersList' in localStorage ? JSON.parse(localStorage.usersList) : []});

    const [formClass , setFormClass] = useState("d-none");
    // this state will appear modal & save user's code
    // because user's code will lose after modal appear!
    const [accessModal , setAccessModal] = useState({
        class : "d-none",
        access : false,
        userCode:"",
    });

    // ============ useEffects =================================
    useEffect(() => {
        localStorage.usersList = JSON.stringify(userState.users);
    }, [userState]);

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
        // but modal (confirmModal) can make it true!
        if (access) {
            let code = accessModal.userCode;
            // to disappear modal we require toggle modal
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
        <UsersContext.Provider value={{
            medalClass : accessModal.class,
            del : true,
            toggleModal : toggleModal,
            delete : deleteUser,
            users : userState.users,
            edit : editUser,
            hide : toggleForm,
            formClass : formClass,
            changeUsersList : changeUsersList,
        }}>
            <>
                {/*{
                This is to show ConfirmModal after you want to delete
                access is False By default but modal can change it!
            }*/}
                {
                    accessModal.access
                        ? <ConfirmModal />
                        : null
                }
                <HeaderProject />
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
                                                userState.users.map((user) => <MakeTableRows key={Date.now()} user={user}/>)
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
                <AddUserForm/>
                {/*{ A button in left bottom side to add User :) }*/}
                <div className="addBtn" onClick={toggleForm}>
                    <span> + </span>
                </div>
            </>
        </UsersContext.Provider>
    )
}