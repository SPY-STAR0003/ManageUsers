// =========== React & Hooks ===================================
import React, { useEffect } from "react";
// =========== Componenets =====================================
import HeaderProject from "./headerProject";
import FeaturesBtn from "./featuresBtn";
// =========== Libraries =======================================
import instance from "../../api/api";
import { Routes , Route } from "react-router-dom";
// =========== Redux ===========================================
import { useDispatch } from "react-redux";
import { getUsersFromDatabase } from "./../../store/slices/usersSlice";
import { changeShowLoading } from "./../../store/slices/loadingSlice"
// =========== Routes ==========================================
import Home from "./../routes/home";
import Help from "../routes/help";
import AboutProject from "./../routes/aboutProject";
// =========== css files =======================================
import "../cssStyles/bundle.scss";
import NotFound from "../routes/notFound";

export default function App() {
    // ============ Redux Functions ============================
    const dispatch = useDispatch()

    // ============ useEffects =================================
    const getUsers = async () => {
        dispatch(changeShowLoading())
        const getUsersRequest = await instance.get("/users");
        const usersList = getUsersRequest.data.data;
        dispatch(getUsersFromDatabase(usersList));
        dispatch(changeShowLoading())
    }

    useEffect(() => {
        getUsers()
    });
    
    return (
        <>
            <HeaderProject />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/help" element={<Help />}/>
                    <Route path="/aboutProject" element={<AboutProject />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <FeaturesBtn />
        </>
    )
}