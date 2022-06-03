// ================= components ==============================
import MakeTableRows from "../table/makeTableRows";
import TableHeader from "../table/tableHeader";
import SimpleModal from "../modal/simpleModal";
import AddNewUserBtn from "../form/addNewUserBtn";
import AddUserForm from "../form/addUserForm";
// =========== Redux ===========================================
import { useSelector } from "react-redux";
// ================= libraries ===============================
import Loading from "../libraries/loading";

export default function Home() {
    // ============= Redux Functions =========================
    const usersList = useSelector(state => state.users.list);
    const loading = useSelector(state => state.loading.showLoading);

    return (
        <div className="showUsers">
            <h2> جدول اسامی و اطلاعات افراد ثبت نام شده </h2>
            {
                loading 
                ? <Loading type="spinningBubbles" color="#FF7F3F" /> 
                : usersList.length !== 0
                    ? 
                        (
                            <div className="tableBox">
                                <table>
                                    <TableHeader />
                                    <tbody>
                                    {
                                        usersList.length !== 0
                                            ? (
                                                usersList.map((user , index) => <MakeTableRows key={index} user={user}/>)
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