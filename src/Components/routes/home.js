// ================= hooks ===================================
import { useContext } from "react";
// ================= components ==============================
import MakeTableRows from "../table/makeTableRows";
import TableHeader from "../table/tableHeader";
import SimpleModal from "../modal/simpleModal";
import AddNewUserBtn from "../form/addNewUserBtn";
import AddUserForm from "../form/addUserForm";
// ================= libraries ===============================
import Loading from "../libraries/loading";
// ================= contexts ================================
import UsersContext from "../../context/usersContext";

export default function Home() {
    // ============= context =================================
    const usersContext = useContext(UsersContext);
    let { users } = usersContext.state;
    let { loading } = usersContext;

    return (
        <div className="showUsers">
            <h2> جدول اسامی و اطلاعات افراد ثبت نام شده </h2>
            {
                loading 
                ? <Loading type="spinningBubbles" color="#FF7F3F" /> 
                : users.length !== 0
                    ? 
                        (
                            <div className="tableBox">
                                <table>
                                    <TableHeader />
                                    <tbody>
                                    {
                                        users.length !== 0
                                            ? (
                                                users.map((user , index) => <MakeTableRows key={index} user={user}/>)
                                            )
                                            // simpleModal is for making UI better !
                                            // it say to user that there's no users ! 
                                            : <SimpleModal />
                                    }
                                    </tbody>
                                </table>
                            </div>
                        )
                    : <SimpleModal />
            }
            <AddUserForm />
            <AddNewUserBtn />
        </div>
    )
}