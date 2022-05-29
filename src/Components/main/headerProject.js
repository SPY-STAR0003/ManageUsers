import { Link } from "react-router-dom"

export default function HeaderProject() {
    // this is Page HeaderProject !!! Very Useful Comment :/ ==============
    return (
        <header>
            <nav className={`rightOfHeader`}>
                <div className={`navbarRight`}>
                    <h1> پروژه مدیریت لیست کاربران </h1>
                </div>
                <div className={`navbarLeft`}>
                    <div className={`listItems`}>
                        <Link className={`listItem`} to="/"> خانه </Link>
                        <Link className={`listItem`} to="/help"> مستندات </Link>
                        <Link className={`listItem`} to="/aboutProject"> درباره برنامه </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}