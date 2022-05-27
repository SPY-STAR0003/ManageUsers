// =========== React & Hooks ===================================
import React, {useEffect , useReducer} from "react";
// =========== Componenets =====================================
import HeaderProject from "./headerProject";
// =========== Context & Reducers ==============================
import UsersContext from "../../context/usersContext";
import AppReducer from "../../reducers/appReducer";
// =========== Libraries =======================================
import instance from "../../api/api";
import { Routes , Route } from "react-router-dom";
// =========== Routes ==========================================
import Home from "./../routes/home";
import Help from "../routes/help";
// =========== css files =======================================
import "../cssStyles/bundle.scss";

export default function App() {
    // ============ Reducers ===================================
    const [state , dispatch] = useReducer(AppReducer ,{
        users : [],
        formClass : "d-none",
        simpleModalClass: "d-none",
        accessToSimpleModal : false,
        userCode:"",
    })

    // ============ useEffects =================================
    const getUsers = async () => {
        const getUsersRequest = await instance.get("/users");
        const users = getUsersRequest.data.data;
        dispatch({type : "getUsersFromDatabase" , payload : {usersInDataBase : users} })
    }

    useEffect(() => {
        getUsers()
    }, []);
    
    return (
        <UsersContext.Provider value={{state,dispatch}}>
            <>
                <HeaderProject />
                <Routes >
                    <Route path="/" element={<Home />}/>
                    <Route path="/help" element={<Help />}/>
                </Routes>
            </>
        </UsersContext.Provider>
    )
}