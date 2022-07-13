// libraries
import { NavLink } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

export default function HeaderProject() {
    const values = useSelector(state => state.language.values);

    return (
        <header>
            <nav className="rightOfHeader">
                <div className="navbarRight">
                    <h1> {values.projectName} </h1>
                </div>
                <div className="navbarLeft">
                    <div className="listItems">
                        <NavLink className="listItem" to="/"> {values.navItem1} </NavLink>
                        <NavLink className="listItem" to="/help"> {values.navItem2} </NavLink>
                        <NavLink className="listItem" to="/aboutProject"> {values.navItem3} </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}