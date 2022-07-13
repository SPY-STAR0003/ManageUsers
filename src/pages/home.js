// react 
import { useState } from 'react';

// components
import AddNewUserBtn from "../components/global/floatBtns/addNewUserBtn";
import AddUserForm from "../components/global/forms/adduser";
import ConfirmDeleteUser from "../components/global/modals/confirmdeleteUser";
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
            <ConfirmDeleteUser />
        </div>
    )
}