// ================ hooks ====================================
import { useState } from 'react';
// ================= components ==============================
import MakeTableRows from "../showUsers/tableMode/makeTableRows";
import TableHeader from "../showUsers/tableMode/tableHeader";
import SimpleModal from "../modal/simpleModal";
import AddNewUserBtn from "../form/addNewUserBtn";
import AddUserForm from "../form/addUserForm";
import ShowUsersInGridMode from '../showUsers/gridMode';
// =========== Redux =========================================
import { useSelector } from "react-redux";
// ================= libraries ===============================
import Loading from "../libraries/loading";

export default function Home() {
    // ============= states ==================================
    const [gridMode , setGridMode] = useState(true)
    // ============= Redux Functions =========================
    const usersList = useSelector(state => state.users.list);
    const loading = useSelector(state => state.loading.showLoading);
    const values = useSelector(state => state.language.values)

    return (
        <div className="showUsers">
            <div className="showUsersHeader">
                <h2> {values.tableLabel} </h2>
                <div className="chooseShowMode">
                    <i className="bi bi-grid" onClick={() => setGridMode(true)}></i>
                    <i className="bi bi-table" onClick={() => setGridMode(false)}></i>
                </div>
            </div>
            {
                loading 
                ? <Loading type="spinningBubbles" color="#FF7F3F" /> 
                : usersList.length !== 0
                    ? gridMode
                        ? 
                            (
                                <div className='gridMode'>
                                    {usersList.map((user , index) => <ShowUsersInGridMode key={index} user={user} />) }
                                </div>
                            )
                        :                         
                            (
                                <div className="tableBox">
                                    <table>
                                        <TableHeader />
                                        <tbody>
                                            {usersList.map((user , index) => <MakeTableRows key={index} user={user}/>)}
                                        </tbody>
                                    </table>
                                </div>
                            )
                    // simpleModal is for making UI better !
                    // it say to user that there's no users ! 
                    : <SimpleModal />
            }
            <AddUserForm />
            <AddNewUserBtn />
        </div>
    )
}