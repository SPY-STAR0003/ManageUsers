import React, {useEffect , useReducer} from "react";
import "../cssStyles/bundle.scss";
import AddUserForm from "../form/addUserForm";
import MakeTableRows from "../table/makeTableRows";
import TableHeader from "../table/tableHeader";
import SimpleModal from "../modal/simpleModal";
import HeaderProject from "./headerProject";
import ConfirmModal from "../modal/confirmModal";
import UsersContext from "../../Context/usersContext";
import AppReducer from "../../Reducers/appReducer";
import axios from "axios";

export default function App() {
    // ============ Reducers ===================================
    const [state , dispatch] = useReducer(AppReducer ,{
        users : [],
        formClass : "d-none",
        accessModalClass: "d-none",
        accessToModal : false,
        userCode:"",
    })

    // ============ useEffects =================================
    const getUsers = async () => {
        const getUsersRequest = await axios.get("https://628cca310432524c58e5e052.endapi.io/users");
        const users = getUsersRequest.data.data;
        console.log(users)
        dispatch({type : "getUsersFromDatabase" , payload : {usersInDataBase : users} })
    }

    useEffect(() => {
        getUsers()
    }, []);
    // ============= change States Functions =====================
    return (
        <UsersContext.Provider value={{
            modalClass : state.accessModalClass,
            formClass : state.formClass,
            dispatch,
        }}>
            <>
                {/*
                This is to show ConfirmModal after you want to delete
                access is False By default but modal can change it!
            */}
                {
                    state.accessToModal
                        ? <ConfirmModal />
                        : null
                }
                <HeaderProject />
                {
                    state.users.length !== 0
                        ? (
                            <div className="tableBox">
                                <table>
                                    <TableHeader />
                                    <tbody>
                                    {
                                        state.users.length !== 0
                                            ? (
                                                state.users.map((user , index) => <MakeTableRows key={index} user={user}/>)
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
                <div className="addBtn" onClick={() => dispatch({type : "toggleForm"})}>
                    <span> + </span>
                </div>
            </>
        </UsersContext.Provider>
    )
}