import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderProject() {
    // this is Page HeaderProject !!! Very Useful Comment :/ ==============

    const values = useSelector(state => state.language.values);

    return (
        <header>
            <nav className="rightOfHeader">
                <div className="navbarRight">
                    <h1> {values.projectName} </h1>
                </div>
                <div className="navbarLeft">
                    <div className="listItems">
                        <Link className="listItem" to="/"> {values.navItem1} </Link>
                        <Link className="listItem" to="/help"> {values.navItem2} </Link>
                        <Link className="listItem" to="/aboutProject"> {values.navItem3} </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}