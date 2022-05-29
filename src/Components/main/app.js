// =========== React & Hooks ===================================
import React, {useEffect , useReducer, useState} from "react";
// =========== Componenets =====================================
import HeaderProject from "./headerProject";
// =========== Context & Reducers ==============================
import UsersContext from "../../context/usersContext";
import AppReducer from "../../reducers/appReducer";
// =========== Libraries =======================================
import instance from "../../api/api";
import { Routes , Route } from "react-router-dom";
import Loading from "../modal/loading";
// =========== Routes ==========================================
import Home from "./../routes/home";
import Help from "../routes/help";
import AboutProject from "./../routes/aboutProject";
// =========== css files =======================================
import "../cssStyles/bundle.scss";

export default function App() {
    // ============ states =====================================
    const [loading , showLoading] = useState(false)

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
        showLoading(true);
        const getUsersRequest = await instance.get("/users");
        const users = getUsersRequest.data.data;
        dispatch({type : "getUsersFromDatabase" , payload : {usersInDataBase : users} });
        showLoading(false);
    }

    useEffect(() => {
        getUsers()
    }, []);
    
    return (
        <UsersContext.Provider value={{state,dispatch}}>
                <HeaderProject />
                {
                    loading ? <Loading type="spinningBubbles" color="#FF7F3F" /> : null
                }
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/help" element={<Help />}/>
                    <Route path="/aboutProject" element={<AboutProject />}/>
                </Routes>
        </UsersContext.Provider>
    )
}