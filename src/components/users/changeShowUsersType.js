// react
import propTypes from 'prop-types';

// redux
import { useSelector } from "react-redux";

// libraries
import Loading from "../global/loading";

// components
import MakeTableRows from "./showTypes/tableMode/makeTableRows";
import TableHeader from "./showTypes/tableMode/tableHeader";
import SimpleModal from "../modals/simpleModal";
import ShowUsersInGridMode from "./showTypes/gridMode";

const ChangeShowUsersType = ({gridMode}) => {
    // Redux Functions
    const usersList = useSelector(state => state.users.list);
    const loading = useSelector(state => state.loading.showLoading);
    
    return (
        <>
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
        </>
    )
}

ChangeShowUsersType.propTypes = {
    gridMode : propTypes.bool,
}

export default ChangeShowUsersType;