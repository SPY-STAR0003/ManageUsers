// react 
import { useState } from 'react';

// redux 
import { useSelector } from 'react-redux';

// components
import AddNewUserBtn from "../components/global/floatBtns/addNewUserBtn";
import AddUserForm from "../components/global/forms/adduser";
import ConfirmDeleteUser from "../components/global/modals/confirmdeleteUser";
import UsersPageHeader from "./../components/users/header";
import ChangeShowUsersType from '../components/users/changeShowUsersType';

export default function Home() {
    const [gridMode , setGridMode] = useState(false);

    const showDeleteUserConfirm = useSelector(state => state.users.accessToSimpleModal);
    const formClass = useSelector(state => state.users.formClass)

    return (
        <div className="showUsers">
            <UsersPageHeader setGridMode={setGridMode} />
            <ChangeShowUsersType gridMode={gridMode} />
            <AddNewUserBtn />
            {
                formClass === "d-flex" && <AddUserForm />
            }
            {
                showDeleteUserConfirm && <ConfirmDeleteUser />
            }
        </div>
    )
}