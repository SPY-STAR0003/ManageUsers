// React & Hooks
import React, { useEffect } from "react";

// Componenets
import HeaderProject from "../components/layouts/headerProject";
import FeaturesBtn from "../components/global/floatBtns/featuresBtn";

// Libraries
import instance from "./../api/api";
import { Routes , Route } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getUsersFromDatabase } from "../store/slices/usersSlice";
import { changeShowLoading } from "../store/slices/loadingSlice";

// pages
import Home from "./home";
import Help from "./help";
import AboutProject from "./aboutProject";

// static files
import "../asset/styles/bundle.scss";
import NotFound from "./404";

export default function App() {
    // Redux Functions
    const dispatch = useDispatch()

    // useEffects
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