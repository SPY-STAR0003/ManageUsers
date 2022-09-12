// React & Hooks
import React, { useEffect , lazy, Suspense } from "react";

// Componenets
import HeaderProject from "../components/layouts/headerProject";
import FeaturesBtn from "../components/global/floatBtns/featuresBtn";

// Libraries
import instance from "./../api";
import { Routes , Route } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getUsersFromDatabase } from "../store/slices/usersSlice";
import { changeShowLoading } from "../store/slices/loadingSlice";

// static files
import "../asset/styles/bundle.scss";
import NotFound from "./404";

// pages ( lazy load )
const Home = lazy(() => import(/* webpackChunkName: 'Home-Route' */ "./home"))
const Help = lazy(() => import(/* webpackChunkName: "Help-Route" */ "./help"))
const AboutProject = lazy(() => import(/* webpackChunkName: "About-Route" */ "./aboutProject"))

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
                <Suspense>
                    <Routes>
                        <Route path="./ManageUsers/" element={<Home />} />
                        <Route path="./ManageUsers/help" element={<Help />}/>
                        <Route path="./ManageUsers/aboutProject" element={<AboutProject />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            <FeaturesBtn />
        </>
    )
}