// react
import PropTypes from "prop-types";

// redux
import { useSelector } from "react-redux";

const UsersPageHeader = ({ setGridMode }) => {

    const values = useSelector(state => state.language.values);

    return (
        <div className="showUsersHeader">
            <h2> {values.tableLabel} </h2>
            <div className="chooseShowMode">
                <i className="bi bi-grid" onClick={() => setGridMode(true)}></i>
                <i className="bi bi-table" onClick={() => setGridMode(false)}></i>
            </div>
        </div>
    )
}

UsersPageHeader.propTypes = {
    setGridMode : PropTypes.func,
}


export default UsersPageHeader;
