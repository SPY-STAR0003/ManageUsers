// react 
import { useState } from 'react';

// components
import AddNewUserBtn from "../components/global/floatBtns/addNewUserBtn";
import AddUserForm from "../components/global/forms/adduser";
import ConfirmModal from "../components/modals/confirmModal";
import UsersPageHeader from "./../components/users/header";

// libraries 
import ChangeShowUsersType from '../components/users/changeShowUsersType';

export default function Home() {
    const [gridMode , setGridMode] = useState(false)

    return (
        <div className="showUsers">
            <UsersPageHeader setGridMode={setGridMode} />
            <ChangeShowUsersType gridMode={gridMode} />
            <AddUserForm />
            <AddNewUserBtn />
            <ConfirmModal />
        </div>
    )
}